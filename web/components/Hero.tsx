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

      // Draw subtle radial glow from top center
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 0, 0,
        canvas.width / 2, 0, canvas.height * 0.8
      );
      gradient.addColorStop(0, 'rgba(0, 62, 227, 0.15)'); // Action Blue glow
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-ai-accent/5 to-transparent rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full w-fit text-xs sm:text-sm mb-2">
              <Zap size={14} className="text-secondary flex-shrink-0" />
              <span className="text-muted-foreground">Empowering AI-Driven Communication</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight text-balance">
                The Future of
                <br />
                Messaging is
                <br />
                <span className="bg-gradient-to-r from-primary via-[#4D7CFF] to-primary bg-clip-text text-transparent">
                  AI-Integrated
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Real-time messaging, group collaboration, and AI tools powered by Gemini and WaveSpeed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 pt-4 items-stretch sm:items-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 font-bold rounded-2xl px-10 py-7 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,62,227,0.4)] w-full sm:w-auto"
              >
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                  Download on App Store
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border bg-transparent text-foreground hover:bg-card font-bold rounded-2xl px-10 py-7 text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
                  Get it on Google Play
                </a>
              </Button>
            </div>

            {/* Follow Us Social */}
            <div className="flex flex-col gap-4 pt-4">
              <span className="text-sm font-semibold text-muted-foreground/60 uppercase tracking-widest">Follow Us</span>
              <div className="flex gap-4">
                {[
                  { label: 'f', href: 'https://www.facebook.com' },
                  { label: '𝕏', href: 'https://x.com' },
                  { label: 'in', href: 'https://www.linkedin.com' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 font-bold text-base"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end items-center w-full group">
            {/* Ambient glows around phone */}
            <div className="absolute -inset-10 bg-primary/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute -inset-10 bg-ai-accent/10 blur-[80px] rounded-full translate-x-10 translate-y-10 opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Phone Mockup Container */}
            <div className="relative w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] h-auto aspect-[9/18.5] bg-[#000] rounded-[3.5rem] border-[10px] border-[#1A1C1E] shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1">
              {/* Phone Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent z-10 pointer-events-none" />

              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-[#1A1C1E] rounded-b-3xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-white/10 rounded-full" />
              </div>

              {/* Phone Screen */}
              <div className="w-full h-full bg-gradient-to-b from-[#0E1013] to-black flex flex-col justify-between p-6 pt-12 relative">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-white/90 px-3">
                  <span className="text-sm font-bold">9:41</span>
                  <div className="flex gap-2 items-center">
                    <span className="text-xs">📶</span>
                    <span className="text-xs font-bold">5G</span>
                    <span className="text-xs">🔋</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center flex-1 gap-10">
                  {/* ZYNC Logo */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full animate-pulse" />
                    <Image
                      src="/icon.png"
                      alt="Zync Logo"
                      width={140}
                      height={140}
                      className="relative"
                    />
                  </div>

                  {/* Welcome Text */}
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-black text-white tracking-tight">ZYNC</h2>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed">
                      Secure. Seamless.<br />AI-Powered.
                    </p>
                  </div>

                  {/* Get Started Button */}
                  <button className="w-full bg-primary text-white font-bold py-4 rounded-[1.25rem] hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 text-base active:scale-95">
                    Start Chatting
                  </button>

                  {/* AI Accent Element */}
                  <div className="absolute bottom-10 right-0 w-24 h-24 bg-ai-accent/20 blur-3xl rounded-full -z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
