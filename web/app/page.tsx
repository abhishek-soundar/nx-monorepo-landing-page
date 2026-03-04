'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturesGrid from '@/components/FeaturesGrid';
import AILaboratory from '@/components/AILaboratory';
import TechnicalExcellence from '@/components/TechnicalExcellence';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturesGrid />
      <AILaboratory />
      <TechnicalExcellence />
      <Footer />
    </main>
  );
}
