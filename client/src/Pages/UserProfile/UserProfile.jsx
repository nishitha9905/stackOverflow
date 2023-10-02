import React, { useState } from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import Avatar from '../../components/Avatar/Avatar'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import {faBirthdayCake,faPen} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UsersProfile.css'

const UserProfile = () => {
    const {id} = useParams();
    const users = useSelector((state)=>state.userReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer);

    const [Switch,setSwitch] = useState(false);
    
  return (
    <div className='home-container1'>
        <LeftSideBar/>
        <div className='home-container-2'>
            <section>
                <div className='user-details-container'>
                    <div className='user-details'>
                        <Avatar backgroundColor="purple" color="white" fontSize="50px" padding="10px 20px">
                        {currentProfile?.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <div className='user-name'>
                            <h1>{currentProfile?.name}</h1>
                            <p><FontAwesomeIcon icon={faBirthdayCake}/> <span style={{marginLeft:"1px"}}>Joined {moment(currentProfile?.joinedOn).fromNow()}</span></p>
                        </div>
                    </div>
                    {
                        currentUser?.result._id === id &&(
                            <button type="button" onClick={()=> setSwitch(true)} className='edit-profile-btn'>
                                <FontAwesomeIcon icon={faPen} /> Edit Profile
                            </button>
                        )
                    }
                </div>
                {
                    Switch ? (
                        <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                    ) :(
                        <ProfileBio currentProfile={currentProfile}/>
                    )
                }
            </section>
        </div>
    </div>
  )
}

export default UserProfile