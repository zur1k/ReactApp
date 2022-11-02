import React from 'react';
import s from './../ProfileInfo.module.css'


const Description = (props) => {

   return (
      <div className={s.descriptionBlock}>
         <div className={s.Avatar}>
            <img src={props.ProfileInfo.avatar} alt="avatar" />
         </div>
         <div className={s.descriptionInfo}>
            <div>{props.ProfileInfo.name}</div>
            <div>{props.ProfileInfo.age}</div>
            <div>{props.ProfileInfo.status}</div>
            <div>{props.ProfileInfo.country}</div>

         </div >
      </div>
   )
}

export default Description