"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import LangDropdown from "./elements/LangDropdown";
import Nav from "./elements/Nav";
import CurrencyDropdown from "./elements/CurrencyDropdown";
import HeaderTopNotify from "./elements/HeaderTopNotify";
import HeaderBrand from "./elements/HeaderBrand";
import HeaderActions from "./elements/HeaderActions";
import HeaderQuickLink from "./elements/HeaderQuickLink";




const HeaderOne = () => {
  const a4_Header = useRef();
  const a4_PlaceHolder = useRef();
  const axilMainmenu = useRef();
  
  const MenuOption = useSelector((state) => state.menu);

  useEffect(()=> {
    const HeaderHeight = a4_Header.current.clientHeight;
    const mainMenu = axilMainmenu.current;
    const mainMenuHeight = axilMainmenu.current.clientHeight;
    const mainmenuPlaceholder = a4_PlaceHolder.current;

    window.addEventListener('scroll', (event) =>{
      if(window.scrollY > HeaderHeight) {
        mainmenuPlaceholder.style.height = mainMenuHeight +"px";
        mainMenu.classList.add('axil-sticky');
      }else{
        mainmenuPlaceholder.style.height = "0";
        mainMenu.classList.remove("axil-sticky");
      }
    }, []);
  })
  return (
    <header className="header axil-header header-style-1" ref={a4_Header}>
      <HeaderTopNotify>
        <p> Open Doors to the world of Electronics <Link href={'/'}>Discover More</Link></p>
      </HeaderTopNotify>
      <div className="axil-header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="header-top-dropdown">
                <LangDropdown/>
                <CurrencyDropdown/>
              </div>
            </div>
            <div className="col-sm-6">
              <HeaderQuickLink/>
            </div>
          </div>
        </div>
      </div>
      <div id="axil-sticky-placeholder" ref={a4_PlaceHolder}/>
      <div className="axil-mainmenu" ref={axilMainmenu}>
        <div className="container">
          <div className="header-navbar">
            <HeaderBrand/>
            <div className={`header-main-nav ${MenuOption.isMobileMenuOpen ? "open": ''}`}>
                <Nav/>
            </div>
            <HeaderActions searchIcon/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderOne