import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
const About = () => {
  return (
    <section className="about-section bg-light">
      <div className="container">
        <div className="section-content  grid grid-cols-1  md:grid-cols-2 items-center gap-12  md:gap-10 mb-28">
          <div className="image-warrper order-2 md:order-1 flex flex-col items-center">
              <Image
                src={"/assets/images/about.png"}
                width={432}
                height={696}
                alt=""
                className="shadow-md rounded-full"
              />
            </div>
          <div className="section-text order-1 md:order-2">
            <span className="text-color-3/80 font-Montserrat font-700 text-medium-text-2 leading-medium tracking-h1-h2 uppercase">
              ABOUT
            </span>
            <h1 className="text-dark font-Montserrat font-500 italic md:not-italic text-h2-48 leading-h2 -tracking-h1-h2 uppercase my-3">
              Crafting UNIQUE BRAND EXPERIENCES SINCE 2014
            </h1>
            <p className="text-dark/80 font-Montserrat font-400 text-lg leading-6 mb-9">
              With a Visual Arts degree, my journey began in graphic design,
              crafting logos and marketing materials. Video editing followed,
              where meticulous attention to detail set my work apart, and I
              ventured into 3D modeling for immersive experiences.
            </p>
            <div className="action-part">
              <Button
                className={cn(
                  buttonVariants({
                    variant: "light",
                    size: "medium",
                    className: "border border-dark",
                  })
                )}
              >
                SCHEDULE A CALL
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark/15 h-[1px] max-w-screen-xl m-auto"></div>
    </section>
  );
};

export default About;
