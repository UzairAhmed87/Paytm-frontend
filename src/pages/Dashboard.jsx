import React from 'react'
import Appbar from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'

function Dashboard() {
  return (
    <>
    <Appbar/>
    <Balance value={10000}/>
    <Users/>
    </>
  )
}

export default Dashboard