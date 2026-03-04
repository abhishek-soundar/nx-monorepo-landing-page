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
    <section className="relative pt-28 pb-24">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Glow effect divs */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-bl from-orange-600/20 to-transparent rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full w-fit text-xs sm:text-sm mb-2">
              <Zap size={14} className="text-secondary flex-shrink-0" />
              <span className="text-muted-foreground">Empowering AI-Driven Communication</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-balance">
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
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Experience real-time messaging, AI-powered assistant, creative content generation, and enterprise-grade security—all in one seamless platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 items-stretch sm:items-center">
              <Button
                size="lg"
                className="bg-secondary text-white hover:bg-orange-600 font-semibold rounded-xl px-8 py-6 text-base transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Get it on Google Play
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-background hover:bg-gray-100 font-semibold rounded-xl px-8 py-6 text-base transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Link href="/download">
                  Download on App Store
                </Link>
              </Button>
            </div>

            {/* Follow Us Social */}
            <div className="flex flex-col gap-4 pt-8">
              <span className="text-sm font-medium text-muted-foreground">Follow Us</span>
              <div className="flex gap-4">
                {['f', '𝕏', 'in'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300 font-semibold text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end items-center w-full">
            {/* Phone Mockup Container - Balanced and constrained for natural growth */}
            <div className="relative w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] max-h-[520px] h-auto aspect-[9/18.5] bg-gradient-to-br from-card to-background rounded-[3rem] border-[8px] border-border shadow-2xl overflow-hidden">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl z-20" />

              {/* Phone Screen */}
              <div className="w-full h-full bg-black flex flex-col justify-between p-6 pt-10">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-white px-2">
                  <span className="text-sm font-semibold">4:23</span>
                  <div className="flex gap-1.5 items-center">
                    <span className="text-[10px]">••••</span>
                    <span className="text-xs">📶</span>
                    <span className="text-xs">🔋</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center flex-1 gap-8">
                  {/* ZYNC Logo */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                    <Image
                      src="/zync-logo.jpg"
                      alt="Zync Logo"
                      width={120}
                      height={120}
                      className="relative rounded-3xl shadow-2xl"
                    />
                  </div>

                  {/* Welcome Text */}
                  <div className="text-center space-y-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Welcome to ZYNC!</h2>
                    <p className="text-sm text-gray-400">where AI meets expression</p>
                  </div>

                  {/* Get Started Button */}
                  <button className="w-full bg-primary text-white font-semibold py-3 rounded-2xl hover:bg-primary/90 transition-colors mt-4 text-sm shadow-lg shadow-primary/20">
                    Get Started
                  </button>

                  {/* Sign In Link */}
                  <div className="text-center mt-2">
                    <p className="text-xs text-gray-500">
                      Already have account?{' '}
                      <span className="text-secondary font-semibold hover:underline cursor-pointer">Sign In Here</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
