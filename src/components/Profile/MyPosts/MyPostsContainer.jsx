import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/Profile-reducer';
import store from '../../../redux/redux-store';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
   debugger
   let state = props.store.getState()


   let onAddPost = () => {
      props.store.dispatch(addPostActionCreator())
   }
   let onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text)
      props.store.dispatch(action)
   }

   return (
      <MyPosts
         addPost={onAddPost}
         updateNewPostText={onPostChange}
         posts={state.ProfilePage.posts}
         newPostText={state.ProfilePage.newPostText}
         btn="Send message"
         title="My Posts"
      />
   )
}

export default MyPostsContainer