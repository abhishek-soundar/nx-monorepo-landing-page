'use client';

import { Code2, Cloud, Zap, FileText } from 'lucide-react';

export default function TechnicalExcellence() {
  const techStack = [
    {
      icon: Code2,
      title: 'TypeScript & React Native',
      description: 'Built with industry-leading frameworks for maximum performance and type safety.',
    },
    {
      icon: Cloud,
      title: 'AWS S3 Storage',
      description: 'Enterprise-grade cloud storage for secure file management and synchronization.',
    },
    {
      icon: Zap,
      title: 'Cross-Platform Sync',
      description: 'Seamless synchronization across all devices. Your data, always in sync.',
    },
    {
      icon: FileText,
      title: 'File Sharing',
      description: 'Support for images (10MB), videos (50MB), and documents (25MB) with high performance.',
    },
  ];

  return (
    <section id="technical" className="relative py-12 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-x-hidden scroll-smooth">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-24 sm:-left-48 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Technical Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Built on a robust, modern tech stack designed for performance, security, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {techStack.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-lg sm:rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="mb-3 sm:mb-4 inline-block p-2 sm:p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">File Sharing Capabilities</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-1.5 sm:mt-2" />
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground">Images</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Up to 10MB per file</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-1.5 sm:mt-2" />
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground">Videos</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Up to 50MB per file</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-1.5 sm:mt-2" />
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground">Documents</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Up to 25MB per file</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Security Features</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-1.5 sm:mt-2" />
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground">Two-Factor Authentication</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">TOTP-based security</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-1.5 sm:mt-2" />
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground">Secure Sessions</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Advanced session management</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-1.5 sm:mt-2" />
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground">End-to-End Encryption</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Your data stays private</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
