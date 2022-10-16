import React from 'react';
import s from './../ProfileInfo.module.css'


const Description = (props) => {

   return (
      <div className={s.descriptionBlock}>
         <div className={s.Avatar}>
            <img src={props.profileInfo.avatar} alt="avatar" />
         </div>
         <div className={s.descriptionInfo}>
            <div>{props.profileInfo.name}</div>
            <div>{props.profileInfo.age}</div>
            <div>{props.profileInfo.status}</div>
            <div>{props.profileInfo.country}</div>

         </div >
      </div>
   )
}

export default Description