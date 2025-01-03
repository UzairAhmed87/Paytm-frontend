import React, { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import axios from 'axios'
import bgImage from '../assets/bg.jpg'
function Dashboard() {
  const [balance,setBalance] = useState('0')
 useEffect(()=>{
  const token = localStorage.getItem('token')
  if (token) {
    axios.get("http://localhost:3000/api/v1/accounts/balance",{
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    .then(res => {
      setBalance(res.data.balance);
      console.log(res.data.balance, "====>>> balance");
      
    })
  }
 
 },[])
  
  return (
    <div className='bg-slate-300 bg-center bg-cover h-screen'style={{backgroundImage : `url(${bgImage})`}}>
    <Appbar/>
    <Balance value={Math.floor(balance)}/>
    <Users/>
    </div>
  )
}

export default Dashboard