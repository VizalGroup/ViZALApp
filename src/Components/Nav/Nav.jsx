import React from 'react'
import style from '../Nav/Nav.module.css'
import logo from '../Img/logo.png'
import { Link } from 'react-router-dom'

function Nav() {
 
  return (
    <div  className={style.nav}>
      <Link to='/'>
    <img src={logo} alt='logo' className={style.img}/>
    </Link>
    <Link to='/descripcion'>
    <button className={style.somos}>Somos ViZal</button>
    </Link>
    </div>
  )
}

export default Nav
