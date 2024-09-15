import React from 'react'
import Appbar from '../components/Appbar'
import { Balance } from '../components/Balance'

function Dashboard() {
  return (
    <>
    <Appbar/>
    <Balance value={10000}/>
    </>
  )
}

export default Dashboard