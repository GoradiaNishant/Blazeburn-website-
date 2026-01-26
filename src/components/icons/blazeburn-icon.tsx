import * as React from 'react';

export const BlazeburnIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
    <text
      x="50%"
      y="60%"
      dominantBaseline="central"
      textAnchor="middle"
      fontFamily="'Playfair Display', serif"
      fontSize="85"
      fontWeight="bold"
    >
      <tspan dx="-0.22em">b</tspan>
      <tspan dx="-0.42em" dy="0.05em">b</tspan>
    </text>
  </svg>
);
