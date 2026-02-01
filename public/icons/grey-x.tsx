import * as React from "react";
const GreyX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="beckham-comparison__x-icon"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={11}
      fill="#e8e8e8"
      stroke="#d0d0d0"
      strokeWidth={2}
    />
    <path
      d="m8.5 8.5 7 7m0-7-7 7"
      stroke="#999"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
export default GreyX;
