'use client'
import SlickSlider from "../element/SlickSlider";
import { ElectronicsSlider } from "@/Data/Slider";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const BannerOne = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <div className="axil-main-slider-area main-slider-style-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-sm-6">
            <div className="main-slider-content">
              <SlickSlider
              slidesToShow={1}
              arrows={false}
              fade={true}
              asNavFor={nav2}
              ref={(slider1 => setNav1(slider1))}
              >
                {ElectronicsSlider.map((data, index) =>(
                  <div key={index}>
                    <span className="subtitle"> <i className={data.subIcon}></i>{data.title}</span>
                    <h1 className="title">{data.title}</h1>
                    <div className="silde-action">
                      <div className="shop-btn">
                        <Link className="axil-btn btn-bg-white" href={"/shop"}><i className="fal fa-shoping-cart"></i> Shop now</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </SlickSlider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerOne