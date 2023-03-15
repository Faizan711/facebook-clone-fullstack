import React from 'react'
import { useState } from 'react';
import { Avatar } from '@mui/material'
import './MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import { FirebaseApp } from 'firebase/app';
import { collection, addDoc, serverTimestamp, Firestore  } from 'firebase/firestore/lite';

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input,setInput] = useState("");
    const [imageUrl,setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const docRef = addDoc(collection(db, "posts"), {
              message: input,
              timestamp: serverTimestamp(),  
              profilePic: user.photoURL,
              username: user.displayName,
              image: imageUrl,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        setImageUrl("");
        setInput("");

    };
  return (
    <div className='messageSender'>
        <div className="messageSender_top">
            <Avatar src={user.photoURL}/>
            <form action="">
                <input 
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                className='messageSender_input'
                placeholder={`What's on your mind, ${user.displayName}`}/>
                <input 
                value={imageUrl}
                onChange={(e)=> setImageUrl(e.target.value)}
                placeholder={"image URL (Optional)"}/>
                <button onClick={handleSubmit} type="submit">
                    Hidden Submit
                </button>
            </form>
        </div>
        <div className="messageSender_bottom">
            <div className="messageSender_option">
                <VideocamIcon style={{color: 'red'}}/>
                <h3>Live Video</h3>
            </div>
            <div className="messageSender_option">
                <PhotoLibraryIcon style={{color: 'green'}}/>
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender_option">
                <InsertEmoticonIcon style={{color: 'yellow'}}/>
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender