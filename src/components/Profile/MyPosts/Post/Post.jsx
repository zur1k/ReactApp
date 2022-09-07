import React from 'react';
import s from './Post.module.css'


const Post = (props) => {

   return (
      <div className={s.item}>
         <img src={props.img} />
         <div className={s.message}>{props.message}</div>
         <span>Likes = {props.count}</span>
      </div>
   )
}

export default Post