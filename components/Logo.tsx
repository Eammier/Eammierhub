"use client";

import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-8", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 cursor-pointer ${className}`}>
      {/* SVG Icon recreating EammierHub Logo */}
      <svg
        viewBox="0 0 450 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <defs>
          {/* Green Gradient for 'E' and arcs */}
          <linearGradient id="logo-green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#39FF88" />
            <stop offset="50%" stopColor="#00D053" />
            <stop offset="100%" stopColor="#00A340" />
          </linearGradient>
        </defs>

        {/* --- Top Green Arc (Swoosh) --- */}
        <path
          d="M 50 180 C 50 40, 380 40, 390 110"
          stroke="url(#logo-green-grad)"
          strokeWidth="35"
          strokeLinecap="round"
          fill="none"
        />

        {/* --- Wireless Signal Symbol (WiFi waves above H) --- */}
        {/* Signal Wave 2 */}
        <path
          d="M 225 105 A 75 75 0 0 1 315 105"
          stroke="url(#logo-green-grad)"
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
        />
        {/* Signal Wave 1 */}
        <path
          d="M 245 130 A 45 45 0 0 1 295 130"
          stroke="url(#logo-green-grad)"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />
        {/* Wireless Dot */}
        <circle cx="270" cy="155" r="16" fill="url(#logo-green-grad)" />

        {/* --- Speed Lines on the left of 'E' --- */}
        {/* Speed line 1 */}
        <path
          d="M 10 190 L 80 190"
          stroke="url(#logo-green-grad)"
          strokeWidth="15"
          strokeLinecap="round"
        />
        {/* Speed line 2 */}
        <path
          d="M 5 220 L 75 220"
          stroke="url(#logo-green-grad)"
          strokeWidth="15"
          strokeLinecap="round"
        />
        {/* Speed line 3 */}
        <path
          d="M 15 250 L 65 250"
          stroke="url(#logo-green-grad)"
          strokeWidth="15"
          strokeLinecap="round"
        />

        {/* --- Letter 'E' (Italic Bold Styled) --- */}
        <path
          d="M 230 145 
             L 95 145 
             C 80 145, 60 160, 60 180 
             L 60 270 
             C 60 290, 80 305, 95 305 
             L 245 305 
             L 255 260 
             L 115 260 
             L 125 225 
             L 230 225 
             L 240 185 
             L 135 185 
             L 142 155 
             Z"
          fill="url(#logo-green-grad)"
        />

        {/* --- Letter 'H' (Italic Bold Styled) --- */}
        {/* Left Vertical Pillar */}
        <path
          d="M 260 160 L 230 305 L 280 305 L 300 205 L 350 205 L 330 305 L 380 305 L 410 160 L 360 160 L 345 235 L 295 235 L 310 160 Z"
          fill="#0A1128"
        />
      </svg>
      {showText && (
        <span className="font-heading font-bold text-xl tracking-tight text-[#0A1128] flex items-center">
          <span className="text-[#0A1128]">Eammier</span>
          <span className="text-[#00D053]">Hub</span>
        </span>
      )}
    </div>
  );
}
