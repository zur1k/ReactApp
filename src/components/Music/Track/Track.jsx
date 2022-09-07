import React from 'react';
import s from '../Music.module.css'



const Track = (props) => {

   return (
      <li className={s.trackItem}>
         <a href="">&#9835; {props.track}</a>
         <div className="settings-block">
            <button className={s.btn} type='button'>&#128264;</button>
            <button className={s.btn} type='button'>+</button>
            <button className={s.btn} type='button'>-</button>
            <button className={s.btn} type='button'>&#9658;</button>
            <span className={s.trackTime}>{props.trackTime}</span>
         </div>

      </li>
   )
}

export default Track