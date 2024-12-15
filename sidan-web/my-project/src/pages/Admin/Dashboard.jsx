import React from 'react'
import AdminHomePage from './AdminHomePage'
import AdminNavbar from './AdminNavbar'
 
const Dashboard = () => {
  return (
    <div className='flex flex-col w-full dark:text-white'>  
        <AdminNavbar /> 
        <AdminHomePage/>
   </div>
  )
}

export default Dashboard