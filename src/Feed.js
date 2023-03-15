import React from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import { useState, useEffect } from 'react'
import db from './firebase'
// import { onSnapshot} from 'firebase/firestore/'
import { collection, getDocs} from 'firebase/firestore/lite'

function Feed() {
  const [posts, setPosts] = useState([]);


  const fetchPost =  () => {
       
     getDocs(collection(db, "posts"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({ id:doc.id, data: doc.data() }));
            setPosts(newData);   
            console.log(newData);             
        })
   
};


  useEffect(() => {
   fetchPost();
  }, [posts]);
  
  
  return (
    <div className='feed'>
        <StoryReel/>
        <MessageSender />
        
        {posts.map((post) => (
          <Post 
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        ))}

        
        {/* <Post 
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshW2NpetcJKgpq6jaRpnFR2uxuGAXWEN8KQ&usqp=CAU"
        message="Wow"
        timestamp="This is a Timestamp"
        username="Faizzy"
        image="data:image/jpeg;base64,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"/>
        <Post 
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshW2NpetcJKgpq6jaRpnFR2uxuGAXWEN8KQ&usqp=CAU"
        message="Wow"
        timestamp="This is a Timestamp"
        username="Faizzy"/>
        <Post /> */}
    </div>
  )
}

export default Feed