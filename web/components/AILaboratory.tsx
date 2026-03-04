'use client';

import React from "react"

import { useState } from 'react';
import Image from 'next/image';

export default function AILaboratory() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <section id="ai-lab" className="relative py-12 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-x-hidden scroll-smooth">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            The AI Laboratory
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Experience the power of advanced AI image generation and background removal technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-2 sm:px-0">
          <div className="rounded-lg sm:rounded-xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm shadow-2xl">
            {/* Before/After Slider */}
            <div
              className="relative w-full aspect-video bg-gray-900 cursor-col-resize select-none overflow-hidden group"
              onClick={handleSliderChange}
            >
              {/* Before Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center px-4">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">📸</div>
                  <p className="text-white text-sm sm:text-base md:text-lg font-semibold">Original Image</p>
                  <p className="text-gray-400 text-xs sm:text-sm">With Background</p>
                </div>
              </div>

              {/* After Image Overlay */}
              <div
                className="absolute inset-0 overflow-hidden transition-all duration-75"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center px-4">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">✨</div>
                    <p className="text-white text-sm sm:text-base md:text-lg font-semibold">Enhanced Image</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Background Removed</p>
                  </div>
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize transition-all duration-75 hover:w-2"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <div className="flex gap-0.5 sm:gap-1">
                    <div className="w-0.5 h-3 sm:h-4 bg-white rounded-full" />
                    <div className="w-0.5 h-3 sm:h-4 bg-white rounded-full" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 text-white text-xs sm:text-sm font-semibold pointer-events-none">
                Original
              </div>
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white text-xs sm:text-sm font-semibold pointer-events-none">
                Enhanced
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-card border-t border-border">
              <p className="text-center text-xs sm:text-sm md:text-base text-muted-foreground">
                Drag the slider to see how our AI transforms images. Remove backgrounds, enhance details, and unlock
                creative possibilities instantly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="p-4 sm:p-6 rounded-lg sm:rounded-lg border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">AI Image Generation</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Transform text descriptions into stunning visuals using advanced generative AI. Perfect for creating
                unique content and visual assets instantly.
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-lg sm:rounded-lg border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Background Removal</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Automatically remove or replace backgrounds with precision. Ideal for professional product photos,
                portraits, and creative compositions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
