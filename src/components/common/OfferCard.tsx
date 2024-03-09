import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Star from "../svg/Star";

interface OfferProps {
  OfferTitle: string;
  OfferText: string;
}

const OfferCard = ({OfferTitle,OfferText}: OfferProps) => {
  return (
    <div className="md:flex md:flex-row md:gap-4 md:max-w-screen-sm mb-16 md:mb-24">
      <div className="offer-svg mb-12 md:mb-0">
      <Star />
      </div>
      <div className="offer-line bg-dark/15 h-[1px] w-24 md:w-44 mb-12 md:mb-0 md:my-4"></div>
      <div className="offer-text">
        <h1 className="text-dark font-Montserrat font-500 italic text-h3-32 leading-h3 tracking-h1-h2 mb-4 uppercase">
          {OfferTitle}
        </h1>
        <p className="text-dark/80 font-Montserrat font-400 text-[18px] leading-medium tracking-h1-h2">
         {OfferText}
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
