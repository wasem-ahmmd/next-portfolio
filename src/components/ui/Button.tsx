import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-Montserrat font-500 text-small-text leading-logo uppercase rounded-xl",
  {
    variants: {
      variant: {
        light: "bg-light text-dark",
        dark: "bg-dark text-light",
      },
      size:{
        medium:"px-6 py-3"

      },
    },
    defaultVariants: {
        variant: "light",
        size: "medium",
    },
  }
);

interface BtnTypes
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
const Button = ({ children, className, size, variant, ...props }: BtnTypes) => {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ variant: variant, size: size, className: className })
      )}
    >
      {children}
    </button>
  );
};

export { Button, buttonVariants };
