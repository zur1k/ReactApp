import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
   debugger
   return (
      <div>
         {/* <ProfileInfo
            profileInfo={props.profilePage.profileInfo}
         /> */}
         <MyPostsContainer
            store={props.store}
         />
      </div>
   )
}

export default Profile