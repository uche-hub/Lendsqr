import React from 'react'
import { HomeIcon, Organisation, SwitchDropdown, UsersIcon } from '../icons';
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarList">
            {/* ============ Switch Organisation =============== */}
            <div className="switchOrg">
                <div className="org">
                    <Organisation/>
                </div>
                <a href=""><p className="orgText">Switch Organisation</p></a>
                <div className="orgDropdown">
                    <SwitchDropdown />
                </div>
            </div>

            {/* ============ DASHBOARD =============== */}
            <div className="dashboard">
                <div className="dashboardIcon">
                    <HomeIcon />
                </div>
                <a href=""><p className="orgText">Dashboard</p></a>
            </div>

            {/* ============ Customers =============== */}
            <div className="customer">
                <h1 className="customerText">CUSTOMERS</h1>
            </div>

            {/* ============ Users =============== */}
            <div className="user active">
                <div className="userContainer">
                    <div className="userIcon">
                        <UsersIcon />
                    </div>
                    <a href=""><p className="orgText">Users</p></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;
