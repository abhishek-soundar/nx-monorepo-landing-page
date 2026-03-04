'use client';

import { Users, MessageSquare, Lock, Zap, Settings, User, MessageCircle } from 'lucide-react';

export default function FeaturesGrid() {
  const timeline = [
    {
      step: 1,
      title: 'Groups',
      description: 'Create and manage team groups with ease. Organize your conversations with Office Teams, channels, and community groups.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      step: 2,
      title: 'Channels',
      description: 'Discuss topics in dedicated channels. Share ideas, forward important messages, and collaborate seamlessly.',
      icon: MessageSquare,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      step: 3,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with 2FA authentication. Your conversations are encrypted and protected.',
      icon: Lock,
      color: 'from-blue-500 to-purple-500',
    },
    {
      step: 4,
      title: 'AI Integration',
      description: 'Leverage AI Assistant for smart features. Generate creative content and enhance your communication.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
    },
    {
      step: 5,
      title: 'Group Settings',
      description: 'Customize groups with AI bots, member management, and media sharing. Control group descriptions and add members seamlessly.',
      icon: Settings,
      color: 'from-pink-500 to-rose-500',
    },
    {
      step: 6,
      title: 'User Profile',
      description: 'Manage your profile with personal details, enable two-factor authentication, and provide feedback to improve your experience.',
      icon: User,
      color: 'from-rose-500 to-orange-500',
    },
    {
      step: 7,
      title: 'Direct Messaging',
      description: 'Experience real-time conversations with direct messaging. Stay connected with contacts through instant chat and video calls.',
      icon: MessageCircle,
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <section id="features" className="relative py-12 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-x-hidden scroll-smooth">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            The Core Features
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-2">
            Powerful capabilities that transform how you communicate and collaborate
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-10 md:space-y-0">
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative md:mb-12 lg:mb-16">
                  {/* Desktop layout */}
                  <div className={`hidden md:flex gap-6 lg:gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-5/12 ${isEven ? 'text-right' : 'text-left'}`}>
                      <div className={`p-4 sm:p-5 lg:p-6 rounded-lg lg:rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 h-full flex flex-col justify-center`}>
                        <div className={`inline-block p-1.5 sm:p-2 rounded-lg mb-2 sm:mb-3 w-fit ${isEven ? 'ml-auto' : ''}`}>
                          <div className={`bg-gradient-to-r ${item.color} p-2 sm:p-3 rounded-lg`}>
                            <IconComponent className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                          </div>
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="w-2/12 flex items-center justify-center flex-shrink-0">
                      <div className="relative">
                        <div className={`w-10 sm:w-11 lg:w-12 h-10 sm:h-11 lg:h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center border-4 border-background shadow-lg flex-shrink-0`}>
                          <span className="text-white font-bold text-sm sm:text-base lg:text-lg">{item.step}</span>
                        </div>
                      </div>
                    </div>

                    {/* Empty space */}
                    <div className="w-5/12" />
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden">
                    <div className="flex gap-3 sm:gap-4">
                      {/* Timeline dot */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center border-4 border-background shadow-lg`}>
                          <span className="text-white font-bold text-xs sm:text-sm">{item.step}</span>
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-1 h-12 sm:h-16 bg-gradient-to-b from-primary to-secondary mt-2" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="pb-6 sm:pb-8 pt-0 flex-1 min-w-0">
                        <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border bg-card/40 backdrop-blur-sm">
                          <div className={`inline-block p-1.5 sm:p-2 rounded-lg mb-2`}>
                            <div className={`bg-gradient-to-r ${item.color} p-1.5 sm:p-2 rounded-lg`}>
                              <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
