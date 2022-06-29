import React from 'react'
import Navbar from '../../component/nav/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className='background'>
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default Dashboard;