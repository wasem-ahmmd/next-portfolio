import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  title: string;
  title_text: string;
  question: string;
  question_text: string;
  image_one: ReactNode;
  image_two: ReactNode;
  img_one_order: string;
  text_order: string;
  img_two_order: string;
}

const ServiceCard = ({
  title,
  title_text,
  question,
  question_text,
  image_one,
  image_two,
  img_one_order,
  text_order,
  img_two_order,
}: HeadingProps) => {
  return (
    <div className="image-warrper relative max-w-screen-sm md:max-w-screen-xxl flex flex-col  md:flex-row items-start md:items-center gap-8 my-10">
      <div
        className={cn(
          img_one_order,
          "image-one  w-[300px] xsm:w-[380px] sm:w-[550px] md:w-[432px]"
        )}
      >
        {image_one}
      </div>
      <div
        className={cn(
          text_order,
          "text-content md:max-w-[300px] lg:max-w-screen-xxs m-auto"
        )}
      >
        <div className="text-one mb-8 lg:mb-14">
          <h6 className="text-dark font-Montserrat font-500 italic text-h3-32 leading-h3 tracking-h1-h2 mb-3">
            {title}
          </h6>

          <p className="text-dark font-Montserrat font-400 text-[18px] leading-medium tracking-h1-h2">
            {title_text}
          </p>
        </div>
        <div className="text-two">
          <h6 className="text-dark font-Montserrat font-500 text-[21px] leading-[21px] tracking-h1-h2 mb-3">
            {question}
          </h6>
          <p className="text-dark font-Montserrat font-400 text-card-text leading-card tracking-h1-h2">
            {question_text}
          </p>
        </div>
      </div>
      <div
        className={cn(
          img_two_order,
          "image-two  absolute bottom-[8%] -end-[0%] sm:-end-[10%] md:static"
        )}
      >
        {image_two}
      </div>
    </div>
  );
};

export default ServiceCard;
