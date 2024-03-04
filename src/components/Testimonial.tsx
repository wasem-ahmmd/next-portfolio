import React from "react";
import TechLogo from "./svg/TechLogo";
import Card from "./common/Card";

const Testimonial = () => {
  return (
    <section className="testimonial-section bg-dark py-24">
      <div className="container max-w-screen-xxl">
        <div className="section-title flex flex-col justify-between items-center mb-7">
          <span className="text-color-3/80 font-Montserrat font-700 text-medium-txt leading-medium tracking-h1-h2 uppercase">
            TESTIMONIALS
          </span>
          <h1 className="text-light font-Montserrat font-500 text-[32px] sm:text-h2-48 leading-h2 -tracking-h1-h2 uppercase my-1">
            WHAT PEOPLE SAY
          </h1>
        </div>
        <div className="section-content">
          <div className="testimonial-card grid grid-cols-1 md:grid-cols-2 gap-2">

            <Card
            cardclass="card-one"
              svg={<TechLogo />}
              title="TechStartup Xperience"
              subtitle="Sarah Thompson"
              Ptext="Ability to capture the essence of our vision and translate it
                into a visually stunning logo exceeded our expectations."
                date="February 2024"
            />
            <Card
            cardclass="card-two"
              svg={<TechLogo />}
              title="GlorifiedBrand"
              subtitle="Sarah Thompson"
              Ptext="Ability to capture the essence of our vision and translate it
                into a visually stunning logo exceeded our expectations."
                date="February 2024"
            />
            <Card
            cardclass="card-three"
              svg={<TechLogo />}
              title="WorldofStartups"
              subtitle="Sarah Thompson"
              Ptext="Ability to capture the essence of our vision and translate it
                into a visually stunning logo exceeded our expectations."
                date="February 2024"
            />
            <Card
            cardclass="card-four"
              svg={<TechLogo />}
              title="StartupNation"
              subtitle="Sarah Thompson"
              Ptext="Ability to capture the essence of our vision and translate it
                into a visually stunning logo exceeded our expectations."
                date="February 2024"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
