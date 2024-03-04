import React from "react";
import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className=" bg-dark px-8 py-16">
      <div className="section-contant">
        <div className="title text-light max-w-screen-lg">
          <h6 className="font-Montserrat font-700 text-medium-txt leading-medium tracking-h1-h2 mb-6 uppercase">
            👋 Hey, I am Erica
          </h6>
          <h1 className="font-Montserrat font-500   bg-text-grad bg-clip-text text-transparent text-mobile-txt sm:text-[50px] md:text-tab-txt lg:text-h1-85 leading-mobile  md:leading-tab lg:leading-h1 -tracking-h1-h2 mb-8 uppercase">
            A YOUNG CREATIVE DESIGNER BASED IN INDIA
          </h1>
        </div>
        <div className="action-part flex gap-4">
          <Button
            className={cn(
              buttonVariants({
                variant: "dark",
                size: "medium",
                className: "border border-light",
              })
            )}
          >
            My WORKS
          </Button>
          <Button
            className={cn(buttonVariants({ variant: "light", size: "medium" }))}
          >
            LET’S TALK
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
