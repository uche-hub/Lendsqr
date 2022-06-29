import React from 'react'
import { UserActive, Users, UsersWithLoans, UsersWithSavings } from '../icons';
import './userCard.scss'

const UserCard = () => {
  return (
    <div className='userCardHeader'>
      <h1 className='userCardText'>Users</h1>

      {/* ==================== CARDS ==================*/}
      <div className="userCardContainer">
        <div className="userCard">
            <div className="userCardDetails">
                <Users />
                <p className='userCardDetailText userCardDetail1'>USERS</p>
                <p className='userCardDetailText userCardDetail2'>2,453</p>
            </div>
        </div>
        <div className="userCard">
            <div className="userCardDetails">
                <UserActive />
                <p className='userCardDetailText userCardDetail1'>ACTIVE USERS</p>
                <p className='userCardDetailText userCardDetail2'>2,453</p>
            </div>
        </div>
        <div className="userCard">
            <div className="userCardDetails">
                <UsersWithLoans />
                <p className='userCardDetailText userCardDetail1'>USERS WITH LOANS</p>
                <p className='userCardDetailText userCardDetail2'>12,453</p>
            </div>
        </div>
        <div className="userCard">
            <div className="userCardDetails">
                <UsersWithSavings />
                <p className='userCardDetailText userCardDetail1'>USERS WITH SAVINGS</p>
                <p className='userCardDetailText userCardDetail2'>102,453</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard;