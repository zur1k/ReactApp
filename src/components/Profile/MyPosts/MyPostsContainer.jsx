import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/Profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux'



let mapStateToProps = (state) => {
   return {
      posts: state.ProfilePage.posts,
      newPostText: state.ProfilePage.newPostText,
      btn: "Send message",
      title: "My Posts"
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(addPostActionCreator())
      },
      onPostChange: (text) => {
         let action = updateNewPostTextActionCreator(text)
         dispatch(action)
      }
   }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer