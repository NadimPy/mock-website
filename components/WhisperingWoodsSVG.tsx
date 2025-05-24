/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import type { SVGComponentProps } from '../index';

export const WhisperingWoodsSVG: React.FC<SVGComponentProps> = ({ className = "", width = "100%", height = "100%" }) => (
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
      <linearGradient id="woodsSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor: 'rgba(160, 210, 235, 0.4)'}} /> {/* Lighter sky */}
        <stop offset="60%" style={{stopColor: 'rgba(170, 230, 200, 0.3)'}} />
        <stop offset="100%" style={{stopColor: 'rgba(120, 180, 150, 0.4)'}} /> {/* Misty bottom */}
      </linearGradient>
      <filter id="woodsSoftGlow">
        <feGaussianBlur stdDeviation="1" />
      </filter>
      <filter id="mistFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.02 0.05" numOctaves="2" result="turbulence"/>
        <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="5" xChannelSelector="R" yChannelSelector="G"/>
         <feGaussianBlur stdDeviation="1"/>
      </filter>
    </defs>
    <rect width="300" height="200" fill="url(#woodsSkyGradient)" />

    {/* Background Mist Layer */}
    <ellipse cx="150" cy="180" rx="180" ry="60" fill="rgba(180, 200, 190, 0.3)" filter="url(#mistFilter)" opacity="0.7" >
      <animate attributeName="baseFrequency" values="0.02 0.05; 0.03 0.06; 0.02 0.05" dur="10s" repeatCount="indefinite" />
    </ellipse>


    {/* Trees - background (lighter, smaller, slightly blurred) */}
    <g opacity="0.6" transform="translate(0, 10) scale(0.9)" filter="url(#woodsSoftGlow)">
      <path d="M70 190 L75 120 Q 77 100 85 100 Q 93 100 95 120 L100 190 Z" fill="rgba(100, 130, 110, 0.5)" /> {/* Tree trunk with canopy shape */}
      <path d="M170 190 L175 130 Q 177 110 185 110 Q 193 110 195 130 L200 190 Z" fill="rgba(90, 120, 100, 0.55)" />
      <path d="M20 190 L25 140 Q 27 125 35 125 Q 43 125 45 140 L50 190 Z" fill="rgba(110, 140, 120, 0.45)" />
    </g>

    {/* Trees - midground */}
    <g opacity="0.8" transform="scale(0.95)">
      <path d="M45 200 L55 100 Q 60 70 75 70 Q 90 70 95 100 L105 200 Z" fill="rgba(70, 100, 80, 0.7)" />
      <path d="M210 200 L220 120 Q 225 90 240 90 Q 255 90 260 120 L270 200 Z" fill="rgba(60, 90, 70, 0.65)" />
    </g>
    
    {/* Trees - foreground */}
    <g>
      <path d="M110 200 L125 80 Q 135 40 155 40 Q 175 40 185 80 L200 200 Z" fill="rgba(50, 80, 60, 0.8)" />
    </g>

     {/* Ground variation */}
    <path d="M0 185 Q80 175 150 180 T300 175 L300 200 L0 200 Z" fill="rgba(70, 100, 80, 0.6)" />
    <path d="M0 190 Q100 185 150 192 T300 190 L300 200 L0 200 Z" fill="rgba(60, 90, 70, 0.4)" />
    
     {/* Subtle light rays / god rays */}
    <g opacity="0.15">
        <path d="M150 0 L130 200 L170 200 Z" fill="rgba(220, 230, 200, 0.5)">
            <animateTransform attributeName="transform" type="skewX" values="-5;5;-5" dur="15s" repeatCount="indefinite" />
        </path>
        <path d="M80 0 L60 200 L100 200 Z" fill="rgba(200, 220, 190, 0.4)">
            <animateTransform attributeName="transform" type="skewX" values="3;-3;3" dur="12s" begin="-2s" repeatCount="indefinite" />
        </path>
    </g>
  </svg>
);
