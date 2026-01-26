import * as React from 'react';

export const BlazeburnIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
    <text
      x="50%"
      y="55%"
      dominantBaseline="central"
      textAnchor="middle"
      fontFamily="'Playfair Display', serif"
      fontSize="90"
      fontWeight="bold"
    >
      <tspan dx="-0.2em">B</tspan>
      <tspan dx="-0.35em" dy="0.1em">B</tspan>
    </text>
  </svg>
);
