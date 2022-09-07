import React from "react";
import s from "./../News.module.css"

const NewsItem = (props) => {
   return (
      <div className={s.NewsBlock}>
         <h3 className={s.NewsItemTitle}>{props.title}</h3>
         <div className={s.NewsItemImg}>
            <img src={props.img} alt="news image" />
         </div>
         <div className={s.NewsItemText}>{props.text}</div>
      </div>
   )
}

export default NewsItem