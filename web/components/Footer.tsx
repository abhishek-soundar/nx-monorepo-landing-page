'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Shield, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-10 mt-10 sm:mt-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 space-y-3 sm:space-y-4">
            <Link href="/" className="flex items-center gap-2 w-fit hover:opacity-80 transition flex-shrink-0">
              <Image
                src="/icon.png"
                alt="Zync Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground">
              The future of AI-integrated messaging for modern communication.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base text-foreground">Features</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Smart Messaging
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Creative Suite
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Location Sharing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Speaker Sticker
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base text-foreground">
              <Link href="/empty" className="hover:opacity-80 transition">Company</Link>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="/empty"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/empty"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/empty"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/empty"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base text-foreground">
              <Link href="/empty" className="hover:opacity-80 transition">Legal</Link>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="/empty"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/empty"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/empty"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/empty"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-6 sm:my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-muted-foreground order-2 sm:order-1">
            © {new Date().getFullYear()} Zync App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
