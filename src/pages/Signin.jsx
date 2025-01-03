import React from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/bg.jpg'
function Signin() {
  const [username,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  return (
    <div className="bg-slate-300 bg-center bg-cover h-screen flex justify-center" style={{backgroundImage : `url(${bgImage})`}}>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
<Heading label={"Sign In"}/>
<SubHeading label={"Enter your credentials to access your account"}/>
<InputBox onChange={(e)=>setUserName(e.target.value)} label={"Email"} placeholder={"johndoe@mail.com"}/>
<InputBox onChange={(e)=>setPassword(e.target.value)} label={"Password"}/>
<div className='pt-4'>
<Button onClick={()=>{
  axios.post("http://localhost:3000/api/v1/user/signin",{
    username,
    password
  }).then(res => {
    localStorage.setItem("token",res.data.token)
    alert("Login successful")
  navigate("/dashboard")
  }
  ).catch(err => {
    console.log(err)
  alert("Account doesn't exist")
  }
  )
}} label={"Sign In"}/>
</div>

<BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
        </div>
      </div>
    </div>
  )
}

export default Signin