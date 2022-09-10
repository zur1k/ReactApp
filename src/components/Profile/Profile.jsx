import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

   return (
      <div>
         <ProfileInfo
            profileInfo={props.profilePage.profileInfo}
         />
         <MyPosts
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            btn="Send message"
            title="My Posts"
            dithpatch={props.dithpatch}
         // addPost={props.addPost}
         // updateNewPostText={props.updateNewPostText}
         />
      </div>
   )
}

export default Profile