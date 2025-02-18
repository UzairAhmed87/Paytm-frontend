import { useState } from 'react'
import './App.css'
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'

function App() {
  const token = localStorage.getItem("token")

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element = {token ? <Navigate to="/dashboard"/> : <Navigate to="/signup"/> }/>
      <Route path='/signup'element={<Signup/>}/>
      <Route path='/signin'element={<Signin/>}/>
      <Route path='/dashboard' element={ <Dashboard/> }/>
      <Route path='/send'element={<SendMoney/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
