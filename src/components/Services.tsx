import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="bg-light py-24">
      <div className="container max-w-screen-xxl">
        <div className="section-title ">
          <span className="text-color-3/80 font-Montserrat font-700 text-medium-txt leading-medium tracking-h1-h2 uppercase">
            SERVICES
          </span>
          <h1 className="text-dark font-Montserrat font-500 text-h2-48 leading-h2 -tracking-h1-h2 uppercase my-1">
            HOW CAN I HELP
          </h1>
        </div>
        <div className="section-content">
          <div className="image-warrper flex flex-col  md:flex-row items-start md:items-center gap-8 my-10">
            <div className="image-one order-2 md:order-1 bg-slate-400">
              <Image
                src={"/assets/images/Simage1.png"}
                width={432}
                height={480}
                alt=""
                className="rounded-[6px] "
              />
            </div>
            <div className="text-content md:max-w-[300px] lg:max-w-screen-xxs m-auto order-1  md:order-2">
              <div className="text-one md:mb-8 lg:mb-14">
                <h6 className="text-dark font-Montserrat font-500 italic text-h3-32 leading-h3 tracking-h1-h2 mb-3">
                  Graphic Design
                </h6>
                <p className="text-dark font-Montserrat font-400 text-[18px] leading-medium tracking-h1-h2">
                  Crafting distinct brand identities that resonate with the
                  essence of each project, from startups seeking recognition to
                  established brands seeking a fresh visual perspective.
                </p>
              </div>
              <div className="text-two">
                <h6 className="text-dark font-Montserrat font-500 text-[21px] leading-[21px] tracking-h1-h2 mb-3">
                  What’s Included?
                </h6>
                <p className="text-dark font-Montserrat font-400 text-card-text leading-card tracking-h1-h2">
                  Seamlessly transitioning between print and digital mediums, I
                  bring ideas to life across diverse platforms, maintaining
                  consistency and visual appeal.
                </p>
              </div>
            </div>
            <div className="image-two order-3 md:order-3">
              <Image
                src={"/assets/images/Simage2.png"}
                width={248}
                height={248}
                alt=""
                className="rounded-[6px]"
              />
            </div>
          </div>
          <div className="bg-dark/15 h-[1px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
