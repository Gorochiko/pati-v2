import * as React from "react";
const RedCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="beckham-comparison__check-icon"
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
      fill="#9b1b1f"
      stroke="#9b1b1f"
      strokeWidth={2}
    />
    <path
      d="m7 12 3.5 3.5L17 9"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default RedCheck;
