"use client"
import React, {useEffect, useRef} from 'react'
import HeaderBrand from '../header/element/HeaderBrand';
import HeaderTopNotify from '../header/element/HeaderTopNotify';


const SplashHeader = () => {

	const axilPlaceholder = useRef();
	const axilMainmenu = useRef();
  
	useEffect(() => {
	  const mainMenu = axilMainmenu.current;
	  const mainMenuHeight = axilMainmenu.current.clientHeight;
    console.log(axilMainmenu.current.clientHeight);
	  const mainmenuPlaceholder = axilPlaceholder.current;
	  window.addEventListener("scroll", (event) => {
		  if (window.scrollY > 40) {
			  mainmenuPlaceholder.style.height = mainMenuHeight + 'px';
			  mainMenu.classList.add("axil-sticky");
		  } else {
			  mainmenuPlaceholder.style.height = '0';
			  mainMenu.classList.remove("axil-sticky");
		  }
	  });
	}, []);

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
      <div className="sumon-sticky-placeholder" ref={axilPlaceholder}/>
      <div className="axil-mainmenu" ref={axilMainmenu}>
        Al ahmdulilah
        <i class='bx bx-x'></i>
      </div>
      </header>
  )
}

export default SplashHeader