import { IconProps } from "@/types/common.t";
import React, { FC } from "react";

const ArrowLeft: FC<IconProps> = (props) => {
  return (
    <svg
    {...props}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
    >
      <rect
        x="-0.5"
        y="0.5"
        width="55"
        height="55"
        rx="27.5"
        transform="matrix(-1 0 0 1 55 0)"
        stroke="#FEFAEE"
      />
      <path
        d="M18.117 28.5333L25.644 35.1839L25 35.9999L16 27.9775L25 19.9999L25.645 20.8149L18.116 27.4666H40V28.5333H18.117Z"
        fill="#FEFAEE"
      />
    </svg>
  );
};

export default ArrowLeft;
