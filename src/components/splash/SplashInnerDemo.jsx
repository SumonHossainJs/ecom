import React from 'react';
import Link from 'next/link';
import SectionTitle from '../element/SectionTitle';
import Image from 'next/image';


const SplashInnerDemo = () => {
  const InnerDemo =[
    {
      title: "Shop",
      thumb: "/images/preview/shop.png",
      url: "#"
  },
  {
      title: "Shop With Sidebar",
      thumb: "/images/preview/shop-sidebar.png",
      url: "#"
  },
  {
      title: "Product Variation 1",
      thumb: "/images/preview/variation-1.png",
      url: "#"
  },
  {
      title: "Product Variation 2",
      thumb: "/images/preview/variation-2.png",
      url: "#"
  },
  {
      title: "Product Variation 3",
      thumb: "/images/preview/variation-3.png",
      url: "#"
  },
  {
      title: "Product Variation 4",
      thumb: "/images/preview/variation-4.png",
      url: "#"
  },
  {
      title: "Product Variation 5",
      thumb: "/images/preview/variation-5.png",
      url: "#"
    },
    
  ]
  return (
    <div className='axil-section-gap pv-inner-demo-area'>
      <div className="container">
        <SectionTitle
        pClass="section-title-center"
        subtitle='Inner Pages'
        subtitleIcon="bx bxs-hot"
        title='Eye catching Pre-build <br/> Inner pages'
        />
        <div className="row">
          {InnerDemo.map((data, index)=>(
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="pv-single-demo">
                <div className="thumb box">
                  <Image
                  src={data.thumb}
                  width={410}
                  height={410}
                  alt={data.title}
                  />
                  <Link href={data.url} className='axil-btn btn-bg-primary right-icon view-btn'> View Demo <i className='bx bx-right-arrow-alt'></i>
                  </Link>
                </div>
                <h5 className='title'>
                  <Link href={data.url}>{data.title}</Link>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default SplashInnerDemo