import React from 'react'
import Navbar from '../../component/nav/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import UserCard from '../../component/userCard/UserCard';

const UserFilter = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <UserCard />
    </div>
  )
}

export default UserFilter;