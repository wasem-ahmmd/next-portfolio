import { ReactNode } from "react";
import { cn } from "@/lib/utils"

interface HeadingProps   {
    svg: ReactNode,
    title:string,
    subtitle:string,
    Ptext:string,
    date:string,
    cardclass:string,
}

const Card = ({svg,title,subtitle,Ptext,date,cardclass}:HeadingProps ) => {
  return (
    <div className={cn(cardclass, "w-full h-auto bg-card-grad rounded-[16px] p-6")}>
      <div className="card-content md:flex gap-3 mb-7">
        <div className="card-svg mb-7 md:mb-0">
        {svg}
        </div>
        <div className="card-title  py-1">
          <h1 className="text-dark font-Montserrat font-500 md:italic text-[21px] md:text-h3-32 leading-[21px]  md:leading-h3 tracking-h1-h2 mb-4 md:mb-1">
           {title}
          </h1>
          <h2 className="text-dark font-Montserrat font-500 text-small-text leading-logo tracking-h1-h2 uppercase">
            {subtitle}
          </h2>
        </div>
      </div>
      <p className="text-dark font-Montserrat font-400 text-[18px] leading-medium tracking-h1-h2 mb-7">
        {Ptext}
      </p>
      <span className="text-dark/40 font-Montserrat font-500 text-small-text leading-logo tracking-h1-h2">
        {date}
      </span>
    </div>
  );
};

export default Card;
