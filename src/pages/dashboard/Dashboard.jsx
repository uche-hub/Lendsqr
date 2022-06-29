import React from 'react'
import Navbar from '../../component/nav/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import UserCard from '../../component/userCard/UserCard';

const Dashboard = () => {
  return (
    <div className='background'>
      <Navbar />
      <Sidebar />
      <UserCard />
    </div>
  )
}

export default Dashboard;