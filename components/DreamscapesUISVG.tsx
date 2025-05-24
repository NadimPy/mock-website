/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import type { SVGComponentProps } from '../index';

export const DreamscapesUISVG: React.FC<SVGComponentProps> = ({ className = "", width = "100%", height = "100%" }) => (
  <svg 
    viewBox="0 0 300 200" 
    width={width} 
    height={height} 
    className={className} 
    preserveAspectRatio="xMidYMid slice" 
    aria-hidden="true"
    style={{ display: 'block' }}
  >
    <defs>
      <linearGradient id="dreamScapeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: 'rgba(170, 230, 200, 0.7)'}} />
        <stop offset="100%" style={{stopColor: 'rgba(170, 230, 200, 0.3)'}} />
      </linearGradient>
      <linearGradient id="dreamScapeGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{stopColor: 'rgba(160, 210, 235, 0.6)'}} />
        <stop offset="100%" style={{stopColor: 'rgba(160, 210, 235, 0.2)'}} />
      </linearGradient>
      <filter id="dreamSoftFocus">
        <feGaussianBlur stdDeviation="2.5" />
      </filter>
      <filter id="dreamSubtleShadow">
        <feDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.1"/>
      </filter>
    </defs>

    <rect width="300" height="200" fill="rgba(230, 240, 250, 0.1)" />


    {/* Background Elements - soft, overlapping, animated */}
    <rect x="5" y="5" width="200" height="130" rx="25" ry="25" fill="url(#dreamScapeGradient1)" opacity="0.7" filter="url(#dreamSoftFocus)">
       <animate attributeName="x" values="5; 15; 5" dur="10s" repeatCount="indefinite" />
       <animate attributeName="y" values="5; 0; 5" dur="8s" repeatCount="indefinite" />
    </rect>
    <rect x="90" y="60" width="200" height="130" rx="35" ry="35" fill="url(#dreamScapeGradient2)" opacity="0.6" filter="url(#dreamSoftFocus)">
       <animate attributeName="width" values="200; 210; 200" dur="9s" repeatCount="indefinite" />
       <animateTransform attributeName="transform" type="rotate" values="0 190 125; 2 190 125; 0 190 125" dur="12s" repeatCount="indefinite" />
    </rect>

    {/* Foreground UI-like elements with subtle animations */}
    <g filter="url(#dreamSubtleShadow)">
      <rect x="30" y="30" width="140" height="80" rx="15" ry="15" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="1">
        <animate attributeName="fill-opacity" values="0.25; 0.35; 0.25" dur="5s" repeatCount="indefinite" />
      </rect>
      <circle cx="65" cy="70" r="18" fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.6)" strokeWidth="1">
        <animate attributeName="r" values="18; 20; 18" dur="4s" repeatCount="indefinite" />
      </circle>
      <path d="M95 55 L145 55 M95 85 L135 85" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="none; 5 5; none" dur="6s" repeatCount="indefinite" />
      </path>
      
      <rect x="185" y="100" width="90" height="60" rx="12" ry="12" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <path d="M200 130 Q215 115 230 130" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round">
         <animateTransform attributeName="transform" type="translate" values="0 0; 0 -3; 0 0" dur="3s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);
