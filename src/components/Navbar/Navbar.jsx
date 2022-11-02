import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import Friend from './friends/friend';



const Navbar = (props) => {

   const ActiveLink = ({ isActive }) => isActive ? `${s.active}` : '';

   let friendsElement = props.NavBar.friends.map(el => <Friend name={el.name} img={el.img} />)
   let navElements = props.NavBar.navigation.map(el => <div className={s.navItem} >
      <NavLink className={ActiveLink} to={`/${el.navItem}`} >{el.navItem}</NavLink>

   </div >)

   return (
      <div className={s.navWrapper}>
         <nav className={s.nav}>
            {navElements}
         </nav >
         <div className="friends">
            <h3 className={s.ourFriendsTitle}>Friends</h3>
            <div className={s.friendsItems}>
               {friendsElement}
            </div>
         </div>

      </div>
   )
}

export default Navbar