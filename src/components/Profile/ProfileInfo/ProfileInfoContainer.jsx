import React from 'react';
import ProfileInfo from './ProfileInfo';


const ProfileInfoContainer = (props) => {
   let state = props.store.getState()
   debugger
   return (
      <ProfileInfo profileInfo={state.ProfilePage.profileInfo} />
   )
}
export default ProfileInfoContainer