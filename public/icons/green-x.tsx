import * as React from "react";
const GreenX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse
      cx={10.4883}
      cy={10.0002}
      rx={10}
      ry={9.7561}
      fill="#1E3B32"
      fillOpacity={0.44}
    />
    <path
      d="M6.82812 6.09766L14.1452 13.4147M6.82812 13.4147L14.1452 6.09766"
      stroke="white"
      strokeWidth={2}
    />
  </svg>
);
export default GreenX;
