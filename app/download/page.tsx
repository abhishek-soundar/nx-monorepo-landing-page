'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Apple, Smartphone } from 'lucide-react';

export default function DownloadPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-600/20 to-transparent rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-secondary hover:text-orange-600 transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-semibold">Back to Home</span>
        </button>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Download Zync
              <br />
              <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                on Your Device
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Get instant access to AI-powered messaging, seamless communication, and creative content generation right at your fingertips.
            </p>
          </div>

          {/* Download Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* App Store Card */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-secondary transition-colors duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-orange-500 flex items-center justify-center">
                    <Apple size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Apple App Store</h3>
                    <p className="text-sm text-muted-foreground">iOS 13.0 or later</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Download Zync directly from the Apple App Store for a seamless experience on your iPhone or iPad with full feature access.
                </p>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Universal purchase across all Apple devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Automatic updates and security patches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Seamless iCloud integration</span>
                  </li>
                </ul>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-white text-background hover:bg-gray-100 font-semibold rounded-xl px-8 py-7 text-base transition-all duration-300 hover:scale-103 hover:shadow-lg group/btn mt-6"
                >
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Download size={20} />
                    Download on App Store
                  </a>
                </Button>
              </div>
            </div>

            {/* Google Play Card */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-secondary transition-colors duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                    <Smartphone size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Google Play Store</h3>
                    <p className="text-sm text-muted-foreground">Android 10.0 or later</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Get Zync from Google Play to enjoy the full app experience on Android devices with instant synchronization.
                </p>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Works on all Android devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span>One-click installation and updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Google Account sync and backup</span>
                  </li>
                </ul>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-secondary text-white hover:bg-orange-600 font-semibold rounded-xl px-8 py-7 text-base transition-all duration-300 hover:scale-103 hover:shadow-lg group/btn mt-6"
                >
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Download size={20} />
                    Get it on Google Play
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6 mt-20 pt-12 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <details className="group bg-card border border-border rounded-xl p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-foreground group-open:text-secondary transition-colors">
                  Is Zync free to download?
                  <span className="text-secondary group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  Yes! Zync is free to download on both iOS and Android. Some premium features require a subscription, but the core messaging and AI features are available to all users.
                </p>
              </details>

              <details className="group bg-card border border-border rounded-xl p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-foreground group-open:text-secondary transition-colors">
                  What are the minimum device requirements?
                  <span className="text-secondary group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  For iOS: iPhone or iPad with iOS 13.0 or later. For Android: Any device running Android 10.0 or later with at least 100MB of free storage.
                </p>
              </details>

              <details className="group bg-card border border-border rounded-xl p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-foreground group-open:text-secondary transition-colors">
                  Can I use Zync on multiple devices?
                  <span className="text-secondary group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  Absolutely! Once you sign in with your account, Zync syncs across all your devices in real-time, keeping your conversations and settings always in sync.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
