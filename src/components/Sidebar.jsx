import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("Person");
    useEffect(() => {
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:3000/api/v1/user/currentUser", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        .then((res) => {
          setUsername(res.data.firstName);
          
          
        });
    }, []);
    const logout =() => {
        localStorage.removeItem("token")
        navigate("/signin")
        
    }
  return (
  
    <div className=' absolute right-0 top-14 text-white bg-gray-800 text-left'>
<ul className=''> 
    <li className='w-50 text-md p-2 border border-slate-300'>{username}</li>
    <li className='w-50 text-md p-2 border border-slate-300'><button onClick={()=>{navigate("/signin")}}>Add another Account</button></li>
    <li className='w-50 text-md p-2 border border-slate-300'><button onClick={logout}>Logout</button></li>
</ul>
    </div>
  )
}


export default Sidebar