'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CoreFeatures from '@/components/CoreFeatures';
import FeaturesGrid from '@/components/FeaturesGrid';
import AILaboratory from '@/components/AILaboratory';
import TechnicalExcellence from '@/components/TechnicalExcellence';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CoreFeatures />
      <AILaboratory />
      <TechnicalExcellence />
      <Footer />
    </main>
  );
}
