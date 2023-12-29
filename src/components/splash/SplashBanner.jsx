"use client"
import Image from "next/image"
import CountUp from "react-countup"
import TrackVisibility from "react-on-screen"

const SplashBanner = () => {
  const BannerData = {
    title: "eTrade Multipurpose eCommerce Next JS Template",
    subtitle: "eCommerce",
    subtitleIcon: "bx bxs-hot",
    mainMockup: "/images/preview/banner-mockup.png",
    mainBg: "/images/preview/banner-bg.png"
  }

  const DemonElement =[
        {
            title: "Demo Website",
            number: "05"
        },
        {
            title: "Inner Page",
            number: "25"
        },
        {
            title: "Elements",
            number: "30"
        },
      ]

      const ToolsUse =[
        "/images/preview/next.png",
        "/images/preview/react.png",
        "/images/preview/npm.png",
        "/images/preview/scss.png",
        "/images/preview/bootstrap.png",
      ]

  return (
    <div className="pv-banner-wrapper" style={{backgroundImage:`url(${BannerData.mainBg})`}}>
      <div className="pv-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="banner-content">
                <div className="inner">
                  <div className="section-title-wrapper">
                    <span className="title-highlighter highlighter-secondary">
                      <i className={BannerData.subtitleIcon}/> {BannerData.subtitle}
                    </span>
                    <h1 className="title">
                      {BannerData.title}
                    </h1>
                  </div>
                </div>
                <div className="theme-brief">
                  {DemonElement.map((data,index) => (
                    <div className="single-counter" key={index}>
                      <span className="subtile">{data.title}</span>
                      <TrackVisibility once>
                        {({isVisible}) =>(
                          <h2 className="title count">
                            {isVisible ? <CountUp end={data.number} duration={1}/>:0}
                          </h2>
                        )}
                      </TrackVisibility>
                    </div>
                  ))}
                </div>
              </div>
              <div className="theme-powerd">
                <label> Powered By</label>
                <ul className="icon-list">
                  {ToolsUse.map((data,index)=> (
                    <li key={index}>
                      <Image src={data} width={25} height={28} alt="Tools"/>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="banner-thumbnail">
                <Image src={BannerData.mainMockup} width={1054}
                height={777}
                alt="mockup"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashBanner