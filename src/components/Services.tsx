import Image from "next/image";
import React from "react";
import ServiceCard from "./common/ServiceCard";
import Offer from "./Offer";
import Contact from "./Contact";

const Services = () => {
  return (
    <section className="bg-light py-24 relative">
      <div className="container max-w-screen-xxl">
        <div className="section-title ">
          <span className="text-color-3/80 font-Montserrat font-600 sm:font-700 text-small-text sm:text-medium-txt leading-medium tracking-h1-h2 uppercase">
            SERVICES
          </span>
          <h1 className="text-dark font-Montserrat  font-500 text-h2-48 leading-h2 -tracking-h1-h2 uppercase my-1 hidden sm:block">
            HOW CAN I HELP
          </h1>
          <h1 className="text-dark font-Montserrat font-700 text-h2-32 leading-[38px] -tracking-h1-h2 uppercase -my-1 block sm:hidden">
            what i offer
          </h1>
        </div>
        <div className="section-content">
          <ServiceCard
            img_one_order="order-2 md:order-1"
            text_order="order-1  md:order-2"
            img_two_order="order-3 md:order-3"
            image_one={
              <Image
                src={"/assets/images/S0image1.png"}
                width={432}
                height={480}
                alt=""
                className="rounded-[6px] sm:w-[100%] md:w-[432px]"
              />
            }
            title="Graphic Design"
            title_text=" Crafting distinct brand identities that resonate with the
              essence of each project, from startups seeking recognition to
              established brands seeking a fresh visual perspective."
            question="What’s Included?"
            question_text="Seamlessly transitioning between print and digital mediums, I
              bring ideas to life across diverse platforms, maintaining
              consistency and visual appeal."
            image_two={
              <Image
                src={"/assets/images/S0image2.png"}
                width={248}
                height={248}
                alt=""
                className="rounded-[6px] w-[150px] xsm:w-[210px] sm:w-[248px]"
              />
            }
          />
          <div className="bg-dark/15 h-[1px]"></div>

          <ServiceCard
            img_one_order="order-2 md:order-3"
            text_order="order-1  md:order-2"
            img_two_order="order-3 md:order-1"
            image_one={
              <Image
                src={"/assets/images/S1image1.png"}
                width={432}
                height={480}
                alt=""
                className="rounded-[6px] sm:w-[100%] md:w-[432px]"
              />
            }
            title="Video Editing"
            title_text="Weaving compelling narratives through meticulous editing, 
            I bring stories to life, balancing pacing, timing, and visual elements to captivate audiences."
            question="What’s Included?"
            question_text="Transforming raw footage into engaging promotional videos,
             whether for local businesses or festival-worthy short films, each project is a testament
              to my storytelling prowess."
            image_two={
              <Image
                src={"/assets/images/S1image2.png"}
                width={248}
                height={248}
                alt=""
                className="rounded-[6px] w-[150px] xsm:w-[210px] sm:w-[248px]"
              />
            }
          />
          <div className="bg-dark/15 h-[1px]"></div>
          <ServiceCard
            img_one_order="order-2 md:order-1"
            text_order="order-1  md:order-2"
            img_two_order="order-3 md:order-3"
            image_one={
              <Image
                src={"/assets/images/S3image1.png"}
                width={432}
                height={480}
                alt=""
                className="rounded-[6px] sm:w-[100%] md:w-[432px]"
              />
            }
            title="3D Animation"
            title_text="Creating realistic 3D models for architectural visualization, 
            I bring concepts to life with attention to detail, lighting, and advanced 
            rendering techniques."
            question="What’s Included?"
            question_text="Contributing to virtual reality projects, I seamlessly integrate 3D elements, 
            enhancing the immersive experience and pushing the boundaries of digital exploration."
            image_two={
              <Image
                src={"/assets/images/S3image2.png"}
                width={248}
                height={248}
                alt=""
                className="rounded-[6px] w-[150px] xsm:w-[210px] sm:w-[248px]"
              />
            }
          />
          <div className="bg-dark/15 h-[1px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
