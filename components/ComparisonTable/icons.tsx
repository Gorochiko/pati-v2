/**
 * SVG Icons for ComparisonTable
 */

export const CheckIcon = ({ color = "#A40011" }: { color?: string }) => (
  <svg 
    width="21" 
    height="20" 
    viewBox="0 0 21 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <ellipse cx="10.4883" cy="10.0002" rx="10" ry="9.7561" fill={color} />
    <path 
      d="M6.44531 10.2079L9.54815 13.114C12.2077 9.79279 14.424 6.88672 14.424 6.88672" 
      stroke="#EFEFEF" 
      strokeWidth="2" 
      strokeLinecap="square"
    />
  </svg>
);

export const XIcon = ({ opacity = 0.44 }: { opacity?: number }) => (
  <svg 
    width="21" 
    height="20" 
    viewBox="0 0 21 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <ellipse 
      cx="10.4883" 
      cy="10.0002" 
      rx="10" 
      ry="9.7561" 
      fill="#1E3B32" 
      fillOpacity={opacity}
    />
    <path 
      d="M6.82812 6.09766L14.1452 13.4147M6.82812 13.4147L14.1452 6.09766" 
      stroke="white" 
      strokeWidth="2"
    />
  </svg>
);
