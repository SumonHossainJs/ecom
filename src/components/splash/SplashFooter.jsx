import React from 'react'

const SplashFooter = () => {
  return (
    <div className='axil-footer-area Footer-style-2 pv-footer-area'>
      <div className="copyright-area copyright-default">
        <div className="container">
          <div className="copyright-left d-flex flex-wrap justify-content-center">
            <ul className='quick-link'>
              <li>
              © {new Date().getFullYear()}. All rights reserved by {" "} Sumon hosain Rekib
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashFooter