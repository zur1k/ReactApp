import React from 'react';
import ProfileInfo from './ProfileInfo';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
   return {
      ProfileInfo: state.ProfilePage.profileInfo
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

   }
}
const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)
export default ProfileInfoContainer