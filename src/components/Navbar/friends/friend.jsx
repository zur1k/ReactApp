import React from "react"
import s from './../Navbar.module.css'


const friend = (props) => {
   return (
      <div className={s.friend}>
         <img className={s.friendAvatar} src={props.img} alt="" />
         <div title="dimisadasdasdas" className={s.friendName}>{props.name}</div>
      </div>
   )
}
export default friend 