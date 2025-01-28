'use client';

import React, { useEffect, useRef, useState } from "react";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-end pb-16">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 mb-4 bg-red-600 text-white text-sm font-semibold rounded">
            Technology
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Breaking News: Latest Technology Updates
          </h1>
          <div className="flex items-center text-gray-300 text-sm">
            <span>{currentDate}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;