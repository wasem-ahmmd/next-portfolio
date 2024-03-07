import React from "react";
import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Star from "./svg/Star";

const Offer = () => {
  return (
    <div className="offer-section my-10">
      <div className="offer-content grid grid-flow-col gap-20   ">
        <div className="offer-title max-w-screen-xxs">
          <h1 className="text-color-3 font-Montserrat font-700 text-medium-txt leading-medium tracking-h1-h2 mb-2 uppercase">
            My offer
          </h1>
          <h2 className="text-dark font-Montserrat font-500 text-h2-48  leading-h2 -tracking-h1-h2 mb-4 uppercase">
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
        <div className="offer-text-content flex flex-row gap-10 max-w-screen-sm">
          <div className="offer-svg">
            <Star />
          </div>
          <div className="offer-line bg-dark/15 h-[1px] w-44 my-4"></div>
          <div className="offer-text">
            <h1 className="text-dark font-Montserrat font-500 italic text-h3-32 leading-h3 tracking-h1-h2 mb-4 uppercase">
              Visual Alchemist
            </h1>
            <p className="text-dark/80 font-Montserrat font-400 text-[18px] leading-medium tracking-h1-h2">
              Crafting brand identities that transcend, ensuring your brand
              captivates and stands out in a crowded digital landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
