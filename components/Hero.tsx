'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Zap, ChevronDown } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let stars: Array<{ x: number; y: number; size: number; opacity: number; twinkleSpeed: number }> = [];

    // Initialize stars
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.6,
        size: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const animate = () => {
      // Clear canvas with dark background
      ctx.fillStyle = '#0E1013';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw golden glow from top
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.4);
      gradient.addColorStop(0, 'rgba(255, 180, 0, 0.15)');
      gradient.addColorStop(0.5, 'rgba(255, 140, 0, 0.08)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.4);

      // Draw stars with twinkling effect
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 0.8 || star.opacity < 0.2) {
          star.twinkleSpeed *= -1;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);



  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-x-hidden pt-20 sm:pt-24 lg:pt-20">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Glow effect divs */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-bl from-orange-600/20 to-transparent rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[calc(100vh-120px)]">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-card border border-border rounded-full w-fit text-xs sm:text-sm">
            <Zap size={14} className="text-secondary flex-shrink-0" />
            <span className="text-muted-foreground">Empowering AI-Driven Communication</span>
          </div>

          {/* Headline */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              The Future of
              <br />
              Messaging is
              <br />
              <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                AI-Integrated
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
            Experience real-time messaging, AI-powered assistant, creative content generation, and enterprise-grade security—all in one seamless platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 items-stretch sm:items-center">
            <Button
              size="lg"
              className="bg-secondary text-white hover:bg-orange-600 font-semibold rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Get it on Google Play
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-background hover:bg-gray-100 font-semibold rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Link href="/download">
                Download on App Store
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Side - Phone Mockup with Code */}
        <div className="relative hidden lg:flex justify-center items-center w-full">
          {/* Phone Mockup */}
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-96 sm:h-[480px] md:h-[540px] lg:h-[600px] bg-gradient-to-br from-card to-background rounded-3xl border-6 sm:border-8 border-border shadow-2xl overflow-hidden">
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-background rounded-b-2xl z-20" />

            {/* Phone Screen */}
            <div className="w-full h-full bg-black flex flex-col justify-between p-6 pt-8">
              {/* Status Bar */}
              <div className="flex items-center justify-between text-white text-xs sm:text-sm">
                <span className="text-lg sm:text-xl font-semibold">4:23</span>
                <div className="flex gap-1">
                  <span className="text-xs">••••</span>
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-col items-center justify-center flex-1 gap-4 sm:gap-6 lg:gap-8">
                {/* ZYNC Logo */}
                <Image
                  src="/zync-logo.jpg"
                  alt="Zync Logo"
                  width={80}
                  height={80}
                  className="sm:w-[96px] sm:h-[96px] md:w-[112px] md:h-[112px] lg:w-[128px] lg:h-[128px] rounded-3xl shadow-2xl"
                />

                {/* Welcome Text */}
                <div className="text-center space-y-2 sm:space-y-3">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Welcome to ZYNC!</h2>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300">where AI meets expression</p>
                </div>

                {/* Get Started Button */}
                <button className="w-full bg-primary text-white font-semibold py-2 sm:py-3 lg:py-4 rounded-2xl hover:bg-blue-700 transition-colors mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-base">
                  Get Started
                </button>

                {/* Sign In Link */}
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-gray-400">
                    Already have account?{' '}
                    <span className="text-secondary font-semibold">Sign In Here</span>
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Footer CTA Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-background pt-8 sm:pt-12 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 sm:gap-8">
          {/* Left - Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button className="bg-secondary text-white hover:bg-orange-600 font-semibold rounded-xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-3 text-xs sm:text-sm lg:text-base transition-all duration-300 hover:scale-105">
              Get it on Google Play
            </Button>
            <Button asChild className="bg-white text-background hover:bg-gray-100 font-semibold rounded-xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-3 text-xs sm:text-sm lg:text-base transition-all duration-300 hover:scale-105">
              <Link href="/download">
                Download on App Store
              </Link>
            </Button>
          </div>

          {/* Right - Follow Us Social */}
          <div className="flex flex-col gap-3 sm:gap-4 items-stretch sm:items-end">
            <span className="text-xs sm:text-sm text-muted-foreground">Follow Us</span>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-secondary flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition font-semibold text-sm"
              >
                f
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-secondary flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition font-semibold text-sm"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-secondary flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition font-semibold text-sm"
              >
                in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
