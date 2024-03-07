import { IconProps } from "@/types/common.t";
import React, { FC } from "react";

const Star: FC<IconProps> = (props) => {
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 0C16.2412 8.73471 23.2653 15.7588 32 16C23.2653 16.2412 16.2412 23.2653 16 32C15.7588 23.2653 8.73471 16.2412 0 16C8.73471 15.7588 15.7588 8.73471 16 0Z"
        fill="#171717"
      />
    </svg>
  );
};

export default Star;
