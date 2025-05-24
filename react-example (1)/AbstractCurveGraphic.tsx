/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import type { SVGComponentProps } from './index'; // Corrected path

// If SVGComponentProps is not directly available, define a local version or import appropriately.
// For this case, assuming SVGComponentProps is defined in index.tsx and exported.
// If it's specific to SVGs in the components folder, define it in a shared types file or here.

// Fallback minimal interface if SVGComponentProps isn't easily importable from root index.tsx
interface LocalSVGComponentProps {
  size?: number; // Specific to this component's original props
  strokeColor?: string;
  strokeWidth?: number;
  variation?: 'one' | 'two' | 'three' | 'default';
  className?: string;
}


export const AbstractCurveGraphic: React.FC<LocalSVGComponentProps> = ({
  size = 100,
  strokeColor = 'rgba(184, 162, 217, 0.7)', 
  strokeWidth = 2,
  variation = 'default',
  className = '',
}) => {
  let pathData;

  switch (variation) {
    case 'one':
      pathData = "M10,50 Q30,10 50,50 T90,50 M20,30 Q50,70 80,30";
      break;
    case 'two':
      pathData = "M20,80 C40,20 60,100 80,20 M15,50 C50,-10 50,110 85,50";
      break;
    case 'three':
      pathData = "M50,10 C10,30 90,70 50,90 M30,20 Q70,50 30,80";
      break;
    default: 
      pathData = "M10,90 C30,70 40,30 50,10 C60,30 70,70 90,90";
      break;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`abstract-curve-graphic ${className}`}
      aria-hidden="true" 
    >
      <path
        d={pathData}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};