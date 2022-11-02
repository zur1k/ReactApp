import React from "react";
import NewsItem from "./NewsItem/NewsItem";
import s from "./News.module.css"

const News = (props) => {

   const NewsElements = props.NewsData.map(el => <NewsItem title={el.title} img={el.img} text={el.text} />)
   return (
      <div className={s.News}>
         <ul>
            {NewsElements}
         </ul>
      </div>
   )
}

export default News