import React from 'react'
import style from '../Nav/Nav.module.css'
import logo from '../Img/logo.png'
import { Link } from 'react-router-dom'
import ChangeLanguage from '../ChangeLanguage/ChangeLanguague';

function Nav({ selectedLanguage, onLanguageChange }) {
  const aboutUs = {
    es: 'Sobre Nosotros',
    en: 'About us',
    fr: 'Qui sommes-nous'
  };
  return (
    <div  className={style.nav}>
      <Link to='/'>
    <img src={logo} alt='logo' className={style.img}/>
    </Link>
    <Link to='/descripcion'>
    <button className={style.somos}>{aboutUs[selectedLanguage]}</button>
    </Link>
    <ChangeLanguage onLanguageChange={onLanguageChange} />
    </div>
  )
}

export default Nav
