import React from 'react';
import Description from '../Description/Description';
import style from '../../Components/Home/Home.module.css'
import { AiOutlineWhatsApp,AiOutlineFacebook } from "react-icons/ai";


export default function Home() {
  return (
    <div className={style.container}>
   <button className={style.button}>Contactanos</button>
  <p className={style.texto}> soy un testo soy un testosoy un testosoy un testosoy un testosoy un testosoy un testosoy un testosoy un testosoy un testo</p>
     
    
  
   
   <footer className={style.footer}>
   <AiOutlineWhatsApp className={style.whatsapp}/>
   <AiOutlineFacebook className={style.face}/>
 <h6 className={style.copy}>
  copy ViZal@2023
  </h6>
   </footer>
    </div>
  );
}
