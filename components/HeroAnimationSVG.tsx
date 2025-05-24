/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

// Using specific color values as CSS variables are harder to access directly in SVG animate attributes
// These should correspond to --color-primary and --color-secondary from index.css
const primaryColorRGB = "184, 162, 217"; 
const secondaryColorRGB = "160, 210, 235";

export const HeroAnimationSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 500 300" // Adjusted viewBox for potentially wider aspect ratio
      className={className} 
      // Styles for positioning are now primarily in index.css for .hero-background-animation
      // width="100%" height="100%" preserveAspectRatio="xMidYMid slice" are good defaults
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="heroAnimBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
        <linearGradient id="lineGrad1" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor={`rgba(${primaryColorRGB}, 0.01)`} />
            <stop offset="50%" stopColor={`rgba(${primaryColorRGB}, 0.2)`} />
            <stop offset="100%" stopColor={`rgba(${primaryColorRGB}, 0.01)`} />
        </linearGradient>
         <linearGradient id="lineGrad2" gradientTransform="rotate(-45)">
            <stop offset="0%" stopColor={`rgba(${secondaryColorRGB}, 0.01)`} />
            <stop offset="50%" stopColor={`rgba(${secondaryColorRGB}, 0.15)`} />
            <stop offset="100%" stopColor={`rgba(${secondaryColorRGB}, 0.01)`} />
        </linearGradient>
      </defs>
      <g filter="url(#heroAnimBlur)">
        {/* Animated radiating circles/ellipses for a softer feel */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <ellipse
            key={`ellipse-${i}`}
            cx="250"
            cy="150"
            rx="10"
            ry="5" // Make them elliptical
            fill="none"
            stroke={`rgba(${i % 2 === 0 ? secondaryColorRGB : primaryColorRGB}, ${0.05 + (i*0.01)})`}
            strokeWidth="1.5"
          >
            <animate
              attributeName="rx"
              values="10; 250; 10" // Wider expansion
              dur={`${4 + i * 1.2}s`}
              begin={`${i * 0.35}s`}
              repeatCount="indefinite"
              calcMode="spline" keyTimes="0; 0.7; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
             <animate
              attributeName="ry"
              values="5; 150; 5" // Taller expansion
              dur={`${4 + i * 1.2}s`}
              begin={`${i * 0.35}s`}
              repeatCount="indefinite"
              calcMode="spline" keyTimes="0; 0.7; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 0"
              dur={`${4 + i * 1.2}s`}
              begin={`${i * 0.35}s`}
              repeatCount="indefinite"
              calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </ellipse>
        ))}

        {/* Soft flowing lines with gradient strokes */}
        <path stroke="url(#lineGrad1)" strokeWidth="40" fill="none" strokeLinecap="round" opacity="0.5">
          <animate 
            attributeName="d"
            values="M0,100 Q125,50 250,100 T500,150; M0,150 Q125,200 250,150 T500,100; M0,100 Q125,50 250,100 T500,150"
            dur="15s"
            repeatCount="indefinite" />
        </path>
        <path stroke="url(#lineGrad2)" strokeWidth="50" fill="none" strokeLinecap="round" opacity="0.4">
          <animate 
            attributeName="d"
            values="M0,200 Q125,250 250,200 T500,150; M0,150 Q125,100 250,150 T500,200; M0,200 Q125,250 250,200 T500,150"
            dur="18s"
            begin="-3s"
            repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
};
