import { Logo } from "@/data/Static";
import Image from "next/image";

const C_logo = () => {
  return (
    <section className="bg-company-gradient px-8 -mt-[1px] ">
      <div className="section-content  py-40">
        <div className="company-logos py-11 flex flex-row justify-between items-center gap-8 md:gap-4">
          {
            Logo?.map((item,index)=>(
              <Image src={`/assets/images/${item.src}`} alt="" width={item.width} height={item.height} key={index} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default C_logo;
