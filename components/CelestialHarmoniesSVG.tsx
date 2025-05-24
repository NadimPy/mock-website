/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import type { SVGComponentProps } from '../index';

export const CelestialHarmoniesSVG: React.FC<SVGComponentProps> = ({ className = "", width = "100%", height = "100%" }) => (
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
      <radialGradient id="celestialSphere1" cx="30%" cy="30%" r="70%" fx="35%" fy="35%">
        <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.1 }} />
      </radialGradient>
      <radialGradient id="celestialSphere2" cx="40%" cy="40%" r="60%" fx="45%" fy="45%">
        <stop offset="0%" style={{ stopColor: 'var(--color-secondary)', stopOpacity: 0.7 }} />
        <stop offset="100%" style={{ stopColor: 'var(--color-secondary)', stopOpacity: 0.1 }} />
      </radialGradient>
      <filter id="celestialBlur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
      </filter>
      <filter id="subtleGlow">
        <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <rect width="300" height="200" fill="rgba(30,20,40,0.1)" />

    {/* Trails - soft blurred paths */}
    <path d="M40 60 Q 100 100 180 50" stroke="rgba(184, 162, 217, 0.2)" strokeWidth="20" fill="none" filter="url(#celestialBlur)">
      <animate attributeName="d" values="M40 60 Q 100 100 180 50; M60 80 Q 120 120 200 70; M40 60 Q 100 100 180 50" dur="10s" repeatCount="indefinite" />
    </path>
    <path d="M250 150 Q 180 120 100 160" stroke="rgba(160, 210, 235, 0.15)" strokeWidth="25" fill="none" filter="url(#celestialBlur)">
       <animate attributeName="d" values="M250 150 Q 180 120 100 160; M230 130 Q 160 100 80 140; M250 150 Q 180 120 100 160" dur="12s" begin="-2s" repeatCount="indefinite" />
    </path>

    <circle cx="70" cy="60" r="45" fill="url(#celestialSphere1)" opacity="0.85" filter="url(#subtleGlow)" />
    <circle cx="190" cy="130" r="60" fill="url(#celestialSphere2)" opacity="0.75" filter="url(#subtleGlow)" />
    <circle cx="140" cy="70" r="30" fill="rgba(247, 197, 216, 0.5)" opacity="0.7" filter="url(#subtleGlow)" />
    
    {/* Subtle animation for a twinkling star effect */}
    <circle cx="260" cy="40" r="2.5" fill="rgba(255, 255, 220, 0.9)">
      <animate attributeName="opacity" values="0.2;0.9;0.2" dur="2.3s" repeatCount="indefinite" />
      <animate attributeName="r" values="2;3;2" dur="3s" begin="-0.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="50" cy="160" r="2" fill="rgba(220, 230, 255, 0.8)">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" begin="-1s" repeatCount="indefinite" />
    </circle>
     <circle cx="150" cy="170" r="1.5" fill="rgba(255, 210, 230, 0.7)">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" begin="-0.2s" repeatCount="indefinite" />
    </circle>
  </svg>
);
