import * as React from "react";
const RedX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="Desktop_only_new"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#50000b"
      strokeWidth={2}
      strokeLinecap="square"
      strokeLinejoin="round"
    >
      <path d="M25.428 6.572 6.572 25.428m18.856 0L6.572 6.572" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default RedX;
