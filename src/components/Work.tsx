import Image from "next/image";
import React from "react";
import { ArrowRight, ArrowLeft } from "@/data/Static";
import Link from "next/link";

const Work = () => {
  return (
    <section className="work-section pt-24 bg-light">
      <div className="section-title flex flex-col justify-between items-center mb-7">
        <span className="text-color-3/80 font-Montserrat font-700 text-medium-txt leading-medium tracking-h1-h2 uppercase">
          PORTFOLIO
        </span>
        <h1 className="text-dark font-Montserrat font-500 text-[40px] md:text-h2-48 leading-h2 -tracking-h1-h2 uppercase my-1">
          MY LATEST WORKS
        </h1>
      </div>
      <div className="image-warrper md:relative  flex items-center justify-center ">
        <div className="images w-full h-[900px] md:h-auto">
        <Image
          src={"/assets/images/work.png"}
          alt=""
          width={1440}
          height={900}
          className="w-full h-full object-cover object-left"
        />
        </div>
        <div className="project-card bg-dark/60 w-[368px] h-auto p-6 mt-96  absolute  md:bottom-[10%]  md:end-[4%]  m-auto  rounded-[12px] ">
          <div className="card-svg flex gap-5 mb-16">
            <Link href={"#"}>
              <ArrowLeft />
            </Link>
            <Link href={"#"}>
              <ArrowRight />
            </Link>
          </div>
          <div className="card-text">
            <span className="text-color-1 bg-color-2 py-1 px-2 font-Montserrat font-500 text-small-text leading-logo tracking-h1-h2 rounded-full">
              BRANDING
            </span>
            <h1 className="text-light font-Montserrat font-500 italic text-h3-32 leading-h3 tracking-h1-h2 my-7">
              Steaan
            </h1>
            <p className="text-light font-Montserrat font-400 text-card-text leading-card tracking-h1-h2">
              Merging modern aesthetics with brand essence, I crafted logos and
              visuals that not only resonated with each startup's unique vision
              but also left a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
