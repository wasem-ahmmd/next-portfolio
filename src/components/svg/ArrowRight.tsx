import { IconProps } from "@/types/common.t";
import React, { FC } from "react";

const ArrowRight: FC<IconProps> = (props) => {
  return (
    <svg
    {...props}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
    >
      <rect width="56" height="56" rx="28" fill="#FEFAEE" />
      <path
        d="M37.9604 28.5333L30.4334 35.1839L31.0774 35.9999L40.0774 27.9775L31.0774 19.9999L30.4324 20.8149L37.9614 27.4666H16.0774V28.5333H37.9604Z"
        fill="#171717"
      />
    </svg>
  );
};

export default ArrowRight;
