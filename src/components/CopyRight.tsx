import React from "react";
import { Menulink } from "@/data/Static";
import Link from "next/link";

const CopyRight = () => {
  return (
    <footer className="copyright-section bg-dark py-7">
      <div className="container max-w-screen-xxl">
        <div className="bg-light/15 h-[1px] mb-9"></div>
        <div className="copyright-content flex flex-col md:flex-row md:justify-between items-center ">
          <div className="copyright-logo mb-5 md:mb-0">
            <h1 className="text-light font-Montserrat font-600 text-small-text leading-logo uppercase">
              waseem ahmed
            </h1>
          </div>
          <div className="copyright-text mb-5 md:mb-0">
            <p className="text-light/80 font-Montserrat font-500 text-small-text leading-logo tracking-h1-h2">
              All rights reserved @ waseem ahmed
            </p>
          </div>
          <div className="copyright-links">
            <ul className="flex items-center gap-7">
              {Menulink?.slice(5, 7).map((item, index) => (
                <li
                  key={index}
                  className="text-light/80 font-Montserrat font-500 text-small-text leading-logo tracking-h1-h2 underline"
                >
                  <Link
                    href={item.href}
                    className="text-light/60 leading-logo font-Montserrat font-500 uppercase"
                  >
                    {item.page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CopyRight;
