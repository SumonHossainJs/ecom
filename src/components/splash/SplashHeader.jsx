// "use client";
// import React, { useEffect, useRef } from "react";
// import HeaderBrand from "../header/element/HeaderBrand";
// import HeaderTopNotify from "../header/element/HeaderTopNotify";

// const SplashHeader = () => {
//   const axilPlaceholder = useRef();
//   const axilMainmenu = useRef();

//   useEffect(() => {
//     const mainMenu = axilMainmenu.current;
//     const mainMenuHeight = axilMainmenu.current.clientHeight;
//     const mainmenuPlaceholder = axilPlaceholder.current;
//     window.addEventListener("scroll", (event) => {
//       if (window.scrollY > 40) {
//         mainmenuPlaceholder.style.height = mainMenuHeight + "px";
//         mainMenu.classList.add("axil-sticky");
//       } else {
//         mainmenuPlaceholder.style.height = "0";
//         mainMenu.classList.remove("axil-sticky");
//       }
//     });
//   }, []);

//   return (
//     <header className="sumon-header header-style-3">
//       <HeaderTopNotify bgImage="/images/others/campaign-bg2.png">
//         <p>
//           Introductory Offer Get Upto 50% Off {""}
//           <a target="_blank" href="#">
//             Buy Now
//           </a>
//         </p>
//       </HeaderTopNotify>
//       <div className="sumon-sticky-placeholder" ref={axilPlaceholder} />
//       <div className="axil-mainmenu" ref={axilMainmenu}>
//         <div className="container">
//           <div className="header-navbar">
//             <HeaderBrand />
//             <div className="header-main-nav">
//               <nav className="mainmenu-nav">
//                 <ul className="mainmenu">
//                   <li>
//                     <a href="#demos" className="smoth-animation">
//                       Demos
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#features" className="smoth-animation">
//                       Features
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#documentation" className="smoth-animation">
//                       Documentation
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#support" className="smoth-animation">
//                       Support
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//               {/* End of main menu Nav */}
//             </div>
//             <div className="header-action">
//               <div className="header-btn">
//                 <a href="#" className="axil-btn btn-bg-primary">
//                 <i className='bx bx-cart'></i> Buy Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default SplashHeader;



"use client";
import { useEffect, useRef } from "react";
import HeaderBrand from "../header/element/HeaderBrand";
import HeaderTopNotify from "../header/element/HeaderTopNotify";

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
    <header className="  header-style-3">
      <HeaderTopNotify bgImage="/images/others/campaign-bg2.png">
        <p>
          Introductory Offer Get Upto 50% Off { ''}
          <a
            target="_blank"
            href="https://themeforest.net/item/etrade-multipurpose-ecommerce-nextjs-template/48473978"
          >
            Buy Now
          </a>
        </p>
      </HeaderTopNotify>
      <div id="axil-sticky-placeholder" ref={axilPlaceholder}/>
      <div className="axil-mainmenu" ref={axilMainmenu}>
        <div className="container">
          <div className="header-navbar">
            <HeaderBrand />
            <div className="header-main-nav">
              <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  <li>
                    <a href="#demos" className="smoth-animation">
                      Demo
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="smoth-animation">
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://new.axilthemes.com/docs/etrade-react/"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://support.axilthemes.com/support/"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </nav>
              {/* End Mainmanu Nav */}
            </div>
            <div className="header-action">
              <div className="header-btn">
                <a
                  target="_blank"
                  href="https://themeforest.net/item/etrade-multipurpose-ecommerce-nextjs-template/48473978"
                  className="axil-btn btn-bg-primary"
                >
                  <i className="fal fa-shopping-cart" /> Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SplashHeader;
