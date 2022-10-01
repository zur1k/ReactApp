import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/Profile-reducer';



const MyPosts = (props) => {

   let NewPostElement = React.createRef()

   let addPost = () => {
      // props.addPost()
      props.dispatch(addPostActionCreator())

   }
   let onPostChange = () => {
      let text = NewPostElement.current.value
      // props.updateNewPostText(text)
      props.dispatch(updateNewPostTextActionCreator(text))


   }

   let postElements = props.posts.map(p => <Post message={p.message} count={p.likeCount} img={p.img} />)
   return (
      <div className={s.MyPostsBlock}>
         <h3 className={s.title}>
            {props.title}
         </h3>
         <div className={s.postForm}>
            <textarea
               ref={NewPostElement}
               className={s.textarea}
               onChange={onPostChange}
               value={props.newPostText}
            />
            <div className={s.btn}>
               <button onClick={addPost} type='button'>{props.btn}</button>
            </div>
         </div>
         <div className={s.posts}>
            <div>
               {postElements}
            </div>
         </div>
      </div>

   )
}

export default MyPosts