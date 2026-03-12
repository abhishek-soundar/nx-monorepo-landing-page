'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';

const features = [
    {
        title: "Quick & Secure Onboarding",
        description: "Get started with Zync in seconds through a streamlined registration experience designed for security and simplicity.",
        bullets: [
            "Simple account creation with guided registration",
            "Secure password handling and protected identity setup",
            "Instant access to messaging, groups, and collaboration tools"
        ],
        image: "/screenshots/onboarding.png",
        accent: "#FF3366"
    },
    {
        title: "Organized Team Groups",
        description: "Create structured group workspaces where teams can collaborate, share ideas, and manage conversations efficiently.",
        bullets: [
            "Create and manage groups for teams or communities",
            "Search and organize teams with a clean interface",
            "Quick access to group channels and members"
        ],
        image: "/screenshots/groups.png",
        accent: "#003EE3"
    },
    {
        title: "Channel-Based Collaboration",
        description: "Use dedicated channels to keep discussions organized across projects, topics, or departments.",
        bullets: [
            "Create topic-based communication channels",
            "Forward messages and add threaded comments",
            "Real-time collaboration for large teams"
        ],
        image: "/screenshots/channels.png",
        accent: "#FF3366"
    },
    {
        title: "Instant Messaging",
        description: "Communicate instantly with colleagues or friends through lightning-fast real-time messaging.",
        bullets: [
            "Send and receive messages instantly",
            "Quickly search conversations and contacts",
            "See message previews and activity updates in real time"
        ],
        image: "/screenshots/chat.png",
        accent: "#003EE3"
    },
    {
        title: "Smart Group Management",
        description: "Manage teams effortlessly with advanced group settings and integrated AI tools.",
        bullets: [
            "Add AI bots directly to groups for automation",
            "Customize group settings and manage members",
            "Search messages and media within group conversations"
        ],
        image: "/screenshots/group-settings.png",
        accent: "#FF3366"
    },
    {
        title: "Advanced Account Security",
        description: "Protect your account with multiple layers of authentication and security controls.",
        bullets: [
            "Enable Two-Factor Authentication for stronger protection",
            "Use authenticator apps or email OTP verification",
            "Monitor security status and manage authentication settings"
        ],
        image: "/screenshots/tfa.png",
        accent: "#003EE3"
    }
];

export default function CoreFeatures() {
    return (
<section id="features" className="py-28 bg-[#0E1013] overflow-hidden">            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Powerful Features Built Into Zync
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto text-balance">
                        Explore how Zync combines messaging, AI, and security in one seamless platform.
                    </p>
                </div>

                {/* Features Blocks */}
                <div className="space-y-40">
                    {features.map((feature, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Text Content */}
                                <div className="flex-1 space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-lg text-gray-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    <ul className="space-y-4">
                                        {feature.bullets.map((bullet, bIndex) => (
                                            <li key={bIndex} className="flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                                                </div>
                                                <span className="text-gray-300 font-medium">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Image / Mockup */}
                                <div className="flex-1 relative group w-full flex justify-center">
                                    {/* Subtle Glow Background */}
                                    <div
                                        className="absolute -inset-6 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                                        style={{ backgroundColor: feature.accent }}
                                    />

                                    <div className="relative rounded-[2.5rem] border border-white/10 bg-[#17181B] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden aspect-[9/18.5] w-full max-w-[300px] mx-auto">
                                        <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden border border-white/5">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                fill
                                                className="object-cover rounded-xl"
                                                sizes="(max-w-768px) 100vw, 300px"
                                                priority={index < 2}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}