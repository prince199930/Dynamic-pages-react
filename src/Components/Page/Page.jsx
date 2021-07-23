import React, {useEffect, useState} from 'react'
import axios from "axios";
import './Page.css'
function Page() {

    const [info, setInfo] = useState([])
    const [pageNo,setPageNo]=useState(2)
    useEffect(() => {
        axios.get(`https://reqres.in/api/users?page=${pageNo}`)
          .then((res) => setInfo(res.data.data))
          .catch((err) => console.log(err));
      }, [pageNo]);
    return (
        <div className='info-container' >
            <p>page No.{pageNo}</p>
            <div><button className={pageNo===0?'dis-btn':""} disabled={pageNo===0?'dis-btn':""} onClick={()=>setPageNo(p=>p-1) } >previos</button><button onClick={()=>setPageNo(p=>p+1)}>Next</button></div>
            {!info.length&&<div> no Data</div>}
            {info.length>=1&&info.map((item)=>
            {
            return(
                <div>
                <div style={{marginRight:'13px'}} ><img src={item.avatar}/></div>
                <div style={{textAlign:"left"}}>
                <p>Email:- {item.email}</p>
                <p>Name:- {`${item.first_name} ${item.last_name}`}</p>
                </div>
            </div>
            )
        }
            )}
            
        </div>
    )
}

export default Page;
