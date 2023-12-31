import React from 'react';
import Image from 'next/image';
import SectionTitle from  "../element/SectionTitle";
import Link from 'next/link';


const SplashHomeDemo = () => {
  const HomeDemo =[
    {
      title:"Electronics",
      thumb:"/images/preview/home-01.png",
      url:'/home/electronics',
    },
    {
      title:"Jewellary",
      thumb:"/images/preview/home-04.png",
      url:'/home/jewellery',
    },
    {
      title:"Fashion",
      thumb:"/images/preview/home-03.png",
      url:'/home/fashion',
    },
    {
      title:"Furniture",
      thumb:"/images/preview/home-05.png",
      url:'/home/Furniture',
    },
    {
      title:"NFT",
      thumb:"/images/preview/home-02.png",
      url:'/home/nft',
    },
  ]
  return (
    <div className='pv-demo-area' id='demo'>
      <div className="container">
        <SectionTitle
          subtitle="Home pages"
          subtitleIcon="bx bxs-hot"
          subColor="highlighter-secondary"
          title='Our Tamplate is just <br/> Ready to use'
        />
        <div className="row">
          {HomeDemo.map((data,index)=>(
            <div key={index} className="col-lg-6 col-md-6 col-12">
                <div className="pv-single-demo">
                  <div className="thumb box">
                    <Image
                    src={data.thumb}
                    width={630}
                    height={517}
                    alt={data.title}
                    />
                    <Link href={data.url} className='axil-btn btn-bg-primary right-icon view-btn'>
                    view Demo <i className="fal"></i>
                    </Link>
                  </div>
                  <h5 className='title'>
                    <Link href={data.url}>{data.title}</Link>
                  </h5>
                </div>
            </div>
          ))}
          <div className="col-lg-6 col-md-6 col-12">
            <div className="pv-single-demo commin">
              <div className="thumb box">
                <Image
                src={"/images/preview/comming-soon.png"}
                height={517}
                width={630}
                alt='Comming Soon page'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashHomeDemo