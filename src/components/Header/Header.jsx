import React from 'react';
import s from './Header.module.css'

const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.logo}>
            <img src='https://s0.tchkcdn.com/g-INhcFgyGACfuwv572HsR9g/4/15988/1200x630/f/0/dc39b47fdfb945992659fd0d0a8cc166_7.jpg' />
         </div>
      </header>
   )
}

export default Header