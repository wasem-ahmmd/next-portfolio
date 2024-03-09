import React from "react";
import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import OfferCard from "./common/OfferCard";

const Offer = () => {
  return (
    <div className="offer-section my-10">
      <div className="offer-content md:grid md:grid-flow-col gap-2   ">
        <div className="offer-title md:max-w-screen-xxs mb-24">
          <h1 className="text-color-3 font-Montserrat font-700 text-medium-txt leading-medium tracking-h1-h2 mb-2 uppercase">
            My offer
          </h1>
          <h2 className="text-dark font-Montserrat font-700 md:font-500 text-h3-32  lg:text-h2-48 leading-[38px]  lg:leading-h2 -tracking-h1-h2 mb-12 uppercase">
            Art of Visual Alchemy
          </h2>
          <div className="action-part">
            <Button
              className={cn(
                buttonVariants({
                  variant: "light",
                  className: "border border-dark px-4 py-[10px]",
                })
              )}
            >
              contact me
            </Button>
          </div>
        </div>
        <div className="offer-text-content ">
          <OfferCard
            OfferTitle="Visual Alchemist"
            OfferText="Crafting brand identities that transcend, ensuring your brand
              captivates and stands out in a crowded digital landscape."
          />
          <OfferCard
            OfferTitle="Aesthetic Maestro"
            OfferText="Elevating designs with a keen eye, seamlessly
             transitioning between print and digital for consistently striking visuals."
          />
          <OfferCard
            OfferTitle="Storytelling Virtuoso"
            OfferText="Mastering the art of storytelling in video editing, creating compelling 
            narratives for promotional videos and short films."
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
