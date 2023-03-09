import React from 'react'
import { Avatar } from '@mui/material'
import './Post.css'

function Post({profilePic, image, username, timestamp, message}) {
  return (
    <div className='post'>
        <div className="post_top">
            <Avatar src={profilePic}
            className="post_avatar"/>
            <div className="post_topInfo">
                <h3>{username}</h3>
                <p>Timestamp...</p>
            </div>
        </div>
        <div className="post_bottom">
            <p>{message}</p>

        </div>
        <div className="post_image">
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Post