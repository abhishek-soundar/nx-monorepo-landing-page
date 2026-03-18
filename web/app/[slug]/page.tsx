import { notFound } from 'next/navigation';
import Link from 'next/link';

interface ContentPageProps {
  params: Promise<{ slug: string }>;
}

const contentData: Record<string, { title: string; description: string; content: string[] }> = {
  about: {
    title: 'About Zync',
    description: 'The future of AI-integrated messaging.',
    content: [
      'Zync is a next-generation communication platform designed to bridge the gap between human connection and artificial intelligence.',
      'Our mission is to make digital interaction more intuitive, creative, and secure than ever before.',
      'Founded by a team of visionaries, Zync is built on the latest advancements in natural language processing and encrypted messaging technology.',
    ],
  },
  blog: {
    title: 'Zync Blog',
    description: 'Stay updated with the latest in AI and communication.',
    content: [
      'Welcome to the official Zync blog. Here we share insights on the future of messaging, product updates, and how AI is changing the way we connect.',
      'Check back regularly for deep dives into our technical excellence and creative features.',
    ],
  },
  contact: {
    title: 'Contact Us',
    description: 'We\'re here to help.',
    content: [
      'Have questions or feedback? We\'d love to hear from you.',
      'Email: support@zync.app',
      'Address: 123 Innovation Drive, Tech Valley, CA 94043',
    ],
  },
  support: {
    title: 'Support Center',
    description: 'Everything you need to get the most out of Zync.',
    content: [
      'Need help with your account or a specific feature?',
      'Browse our FAQ, tutorials, and documentation to find answers to your questions.',
      'If you can\'t find what you\'re looking for, our support team is available 24/7.',
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'Your privacy is our top priority.',
    content: [
      'At Zync, we believe privacy is a fundamental human right. That\'s why we use end-to-end encryption for all your messages.',
      'We do not sell your personal data to advertisers. Your conversations are yours alone.',
      'Read our full policy to learn how we protect your information.',
    ],
  },
  terms: {
    title: 'Terms of Service',
    description: 'Terms and conditions for using Zync.',
    content: [
      'By using Zync, you agree to our terms of service. These terms ensure a safe and respectful environment for all users.',
      'We outline what you can expect from us and what we expect from you as part of the Zync community.',
    ],
  },
  security: {
    title: 'Security',
    description: 'Enterprise-grade protection for every user.',
    content: [
      'Zync is built with security as its foundation. We employ advanced cryptographic protocols to ensure your data stays safe.',
      'Regular audits and bug bounty programs help us stay ahead of potential threats.',
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    description: 'How we use cookies to improve your experience.',
    content: [
      'Zync uses minimal cookies to enhance site performance and remember your preferences.',
      'We do not use tracking cookies for third-party advertising.',
    ],
  },
  'smart-messaging': {
    title: 'Smart Messaging',
    description: 'AI-powered conversations.',
    content: [
      'Our Smart Messaging feature uses advanced AI to understand context and suggest helpful replies, schedule meetings, and even translate languages in real-time.',
    ],
  },
  'ai-assistant': {
    title: 'AI Assistant',
    description: 'Your personal companion in every chat.',
    content: [
      'Get more done with the integrated Zync AI Assistant. Prompt it for creative ideas, summaries of long conversations, or just to get answers to your burning questions.',
    ],
  },
  'creative-suite': {
    title: 'Creative Suite',
    description: 'Express yourself like never before.',
    content: [
      'Unlock your creativity with built-in tools for image generation, custom filters, and interactive stickers—all powered by AI.',
    ],
  },
  'location-sharing': {
    title: 'Location Sharing',
    description: 'Stay connected with those who matter.',
    content: [
      'Share your real-time location with friends and family with granular privacy controls. Perfect for meetups or keeping loved ones informed.',
    ],
  },
  'speaker-sticker': {
    title: 'Speaker Sticker',
    description: 'Audio communication made fun.',
    content: [
      'Bring your voice to life with animated Speaker Stickers that react to your audio messages.',
    ],
  },
};

export default async function ContentPage({ params }: ContentPageProps) {
  const { slug } = await params;
  const data = contentData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link 
          href="/" 
          className="text-primary hover:underline mb-8 inline-block"
        >
          ← Back to home
        </Link>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
          {data.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          {data.description}
        </p>
        <div className="prose prose-invert max-w-none space-y-6">
          {data.content.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-foreground/80">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
