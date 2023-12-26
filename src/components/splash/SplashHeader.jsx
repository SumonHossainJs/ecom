"use client";
import React, { useEffect, useRef } from "react";
import HeaderBrand from "../header/element/HeaderBrand";
import HeaderTopNotify from "../header/element/HeaderTopNotify";

const SplashHeader = () => {
  const axilPlaceholder = useRef();
  const axilMainmenu = useRef();

  useEffect(() => {
    const mainMenu = axilMainmenu.current;
    const mainMenuHeight = axilMainmenu.current.clientHeight;
    const mainmenuPlaceholder = axilPlaceholder.current;
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 40) {
        mainmenuPlaceholder.style.height = mainMenuHeight + "px";
        mainMenu.classList.add("axil-sticky");
      } else {
        mainmenuPlaceholder.style.height = "0";
        mainMenu.classList.remove("axil-sticky");
      }
    });
  }, []);

  return (
    <header className="sumon-header header-style-3">
      <HeaderTopNotify bgImage="/images/others/campaign-bg2.png">
        <p>
          Introductory Offer Get Upto 50% Off {""}
          <a target="_blank" href="#">
            Buy Now
          </a>
        </p>
      </HeaderTopNotify>
      <div className="sumon-sticky-placeholder" ref={axilPlaceholder} />
      <div className="axil-mainmenu" ref={axilMainmenu}>
        <div className="container">
          <div className="header-navbar">
            <HeaderBrand />
            <div className="header-main-nav">
              <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  <li>
                    <a href="#demos" className="smoth-animation">
                      Demos
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="smoth-animation">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#documentation" className="smoth-animation">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#support" className="smoth-animation">
                      Support
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SplashHeader;
