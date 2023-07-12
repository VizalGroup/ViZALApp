import React from 'react'
import style from '../Nav/Nav.module.css'
import logo from '../Img/logo.png'

function Nav() {
 
  return (
    <div  className={style.nav}>
    <img src={logo} alt='logo' className={style.img}/>
    </div>
  )
}

export default Nav
