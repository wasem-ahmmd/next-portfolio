"use client";
import React, { useState } from "react";
import { MenuClose, Menulink, MenuOpen } from "@/data/Static";
import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Nav = () => {
  const [toggle, settoggle] = useState<boolean>(false);
  return (
    <header className="bg-dark w-full py-3 fixed top-0 start-0 end-0 z-50">
      <div className="max-w-screen-xxl px-8 mx-auto flex flex-row justify-between items-center ">
        <div className="flex flex-row items-center justify-between">
          <Link
            href=""
            className="text-light leading-logo font-Montserrat font-600 uppercase"
          >
            Waseem Ahmed
          </Link>
        </div>
        <nav
          className={`xl:relative fixed ${
            toggle ? "top-0" : "-top-full"
          } transition-all overflow-hidden duration-300 xl:top-[unset] start-0 xl:start-[unset] py-3 px-6 w-full xl:w-fit bg-dark xl:h-fit h-screen`}
        >
          <div className="flex items-center justify-between mb-10 xl:hidden">
            <Link
              href=""
              className="text-light leading-logo font-Montserrat font-600 uppercase"
            >
              Waseem Ahmed
            </Link>
            <button onClick={() => settoggle(false)}>
              <MenuClose className="text-light h-10 w-10" />
            </button>
          </div>
          <ul className="flex xl:items-center xl:flex-row flex-col gap-6 xl:gap-12">
            {Menulink?.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-light/60 leading-logo font-Montserrat font-500 uppercase"
                >
                  {item.page}
                </Link>
              </li>
            ))}
          </ul>
          <div className="action-part xl:hidden uppercase text-center bg-light w-fit rounded-xl py-3 mt-10">
            <Button
              className={cn(
                buttonVariants({
                  variant: "light",
                  size: "medium",
                  className: "py-0",
                })
              )}
            >
              get in touch
            </Button>
          </div>
          <div className="w-[500px] h-[500px] bg-small-menu rounded-full absolute blur-2xl -z-50 -bottom-[200px] start-1/2 -translate-x-1/2  hidden"></div>
        </nav>
        <button onClick={() => settoggle(true)} className={"xl:hidden"}>
          <MenuOpen className="text-light h-10 w-7" />
        </button>

        <div className="action-part hidden xl:block">
          <Button
            className={cn(
              buttonVariants({
                variant: "light",
                size: "medium",
                className: "w-fit",
              })
            )}
          >
            get in touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
