import React from "react";
import SectionTitle from "../element/SectionTitle";
import Image from "next/image";

const SplashCta = () => {
  return (
    <div className="pv-call-to-action">
      <div className="container">
        <div className="pv-action-box">
          <div className="section-title-wrapper">
            <SectionTitle
              pClass="section-title-center"
              subtitle="Are You ready"
              subtitleIcon="bx bxs-hot"
              title="Let's Start Your Business today!"
            />
            <a href="#" className=" axil-btn btn-bg-primary su-btn">
              <i className="box box cart"></i> Buy now
            </a>
          </div>
          <div className="pv-action-thumbnail">
            <Image
            src={"/images/preview/cta-mockup.png"}
            width={1230}
            height={540}
            alt="cta Mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashCta;
