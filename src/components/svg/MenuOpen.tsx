import { IconProps } from "@/types/common.t";
import React, { FC } from "react";

const MenuOpen: FC<IconProps> = (props) => {
  return (
    <svg {...props} viewBox="0 0 32 21" fill="none">
    <rect x="5" width="27" height="3" fill="currentColor"/>
    <rect y="9" width="32" height="3" fill="currentColor"/>
    <rect x="3" y="18" width="29" height="3" fill="currentColor"/>
    </svg>
  );
};

export default MenuOpen;
