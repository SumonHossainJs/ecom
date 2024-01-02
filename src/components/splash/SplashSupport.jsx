import React from 'react'

const SplashSupport = () => {
  const SupportData =[
    {
      title:"Online Documentation", 
      icon:"Booki",
      text:"Well organized and up to date",
      btnText:"View Documentation",
      btnUrl:"#",
      class:"online-documentation",
    },
    {
      title:"Dedicated Support", 
      icon:"headset",
      text:"We Respond within 1 business day. Weekends excluded",
      btnText:"contact Support",
      btnUrl:"#",
      class:"dedicated-support",
    },
  ]
  return (
    <div className='pv-support-area'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row row--20">
              {SupportData.map((data,index)=>(
                <div className="col-lg-6" key={index}>
                  <div className={`pv-support ${data.class}`} >
                    <a href={data.btnUrl} target="_blank" rel="noopener noreferrer" className='inner'>
                      <span className="icon">
                        <i className={data.icon}></i>
                      </span>
                      <span className="content">
                        <div className="h3 title">
                          {data.title}
                        </div>
                        <span className="b1 paragraph">{data.text}</span>
                        <span className="axil-btn">
                          {data.btnText}
                          <i className="box bsx-arrow"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashSupport