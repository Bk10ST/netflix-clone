//step 87 // step 88 go to navbar

import React from 'react'
import './Profilescreen.css'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'

function ProfileScreen() {

    //step 91
    const user = useSelector(selectUser);
  return (
    <div className='profilescreen'>
        {/*setp 89 */}
        <Nav/>
        {/**90 */}
        <div className="profilebody">
            <h1>Edit profile</h1>
            <div className="profilscreeninfo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className='profilscreendetails'>
                    <h2>{user.email}</h2>
                    {/*step 92*/}
                    <div className="profilescreenplan">
                        {/*step 95  */}
                        <h3>Plans </h3>
                        {/*atep 96 create database cloud firebase */}

                            {/*93  after this step 94 got to css*/}
                        <button onClick={()=> auth.signOut()} className='profilescreensignout'>Sign Out</button>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default ProfileScreen