"use client"
import React, {useEffect, useRef} from 'react'
import HeaderBrand from '../header/element/HeaderBrand';
import HeaderTopNotify from '../header/element/HeaderTopNotify';


const SplashHeader = () => {

  const placeHolder = useRef();
  const mainMenuRef = useRef();


  useEffect(()=> {
      const mainMenu = mainMenuRef.current;
      const mainMenuHeight = mainMenuRef.current.clientHeight;
      const mainMenuPlaceHolder = placeHolder.current;

      if(window.scrollY > 40){
        mainMenuPlaceHolder.style.height = mainMenuHeight+"px";
        mainMenu.classList.add("nav-sticky");
      }else{
        mainMenuPlaceHolder.style.height = 0+"px";
        mainMenu.classList.remove("nav-sticky");
      }
  },[]);

  return (
    <header className='sumon-header header-style-3'>
      <HeaderTopNotify>
        <p>
          Al hamdulilah Subhan allah La Ilaha illalah
          <a href="#">
            Buy Now
          </a>
        </p>
      </HeaderTopNotify>
      </header>
  )
}

export default SplashHeader