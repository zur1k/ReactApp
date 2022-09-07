import React from 'react';
import Description from './description/description';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
   return (

      <div className={s.mainBlock}>
         <div className={s.bg}>
            <img src='https://s0.tchkcdn.com/g-INhcFgyGACfuwv572HsR9g/4/15988/1200x630/f/0/dc39b47fdfb945992659fd0d0a8cc166_7.jpg' alt="flag" />
         </div>
         <Description profileInfo={props.profileInfo} />
      </div>
   )
}
export default ProfileInfo