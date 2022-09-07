import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'


const DialogItem = (props) => {
   let path = "/dialogs/" + props.id

   return (
      <div className={s.dialog}>
         <img className={s.dialogAvatar} src={props.img} alt="" />
         <NavLink className={s.dialogName} to={path}>{props.name}</NavLink>
      </div>
   )
}

export default DialogItem