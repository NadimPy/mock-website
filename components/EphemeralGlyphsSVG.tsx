/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import type { SVGComponentProps } from '../index';

export const EphemeralGlyphsSVG: React.FC<SVGComponentProps> = ({ className = "", width = "100%", height = "100%" }) => (
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
      <filter id="glyphSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" result="blur"/>
        <feFlood floodColor="var(--color-accent)" floodOpacity="0.7" result="flood"/>
        <feComposite in="flood" in2="blur" operator="in" result="glow"/>
        <feMerge>
          <feMergeNode in="glow"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
       <linearGradient id="glyphBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: "rgba(var(--color-accent-rgb), 0.05)"}} />
        <stop offset="100%" style={{stopColor: "rgba(var(--color-primary-rgb), 0.05)"}} /> {/* Using CSS vars needs a bit of a hack if not directly in CSS */}
      </linearGradient>
    </defs>
    <rect width="300" height="200" fill="rgba(59, 50, 79, 0.1)" /> {/* Darker subtle background for pink to pop */}
    
    <g filter="url(#glyphSoftGlow)" stroke="rgba(247, 197, 216, 0.9)" strokeWidth="2.5" fill="none" strokeLinecap="round">
      {/* Glyph 1 - Abstract Spiral */}
      <path d="M60,100 a35,35 0 0,1 35,-35 a25,25 0 0,0 -25,-25 a15,15 0 0,1 15,-15">
        <animateTransform attributeName="transform" type="rotate" from="0 77.5 65" to="360 77.5 65" dur="18s" repeatCount="indefinite"/>
        <animate attributeName="stroke-dasharray" values="0 100; 50 50; 0 100" dur="6s" repeatCount="indefinite" />
      </path>
      
      {/* Glyph 2 - Intersecting & Pulsing Lines */}
      <g transform="translate(150, 100)">
        <line x1="-35" y1="-35" x2="35" y2="35">
            <animate attributeName="stroke-width" values="2.5; 4; 2.5" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="-35" y1="35" x2="35" y2="-35">
             <animate attributeName="stroke-width" values="2.5; 4; 2.5" dur="3s" begin="-1.5s" repeatCount="indefinite" />
        </line>
        <circle cx="0" cy="0" r="40" strokeDasharray="6,4" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;20;0" dur="4.5s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur="25s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      {/* Glyph 3 - Wavy Form with path morph */}
      <path d="M230,40 Q250,70 230,100 T230,160" strokeWidth="3">
         <animate attributeName="d" 
           values="M230,40 Q250,70 230,100 T230,160; M230,40 Q210,70 230,100 T230,160; M230,40 Q250,70 230,100 T230,160" 
           dur="7s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);
