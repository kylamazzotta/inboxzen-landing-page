import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  Mail, 
  MessageCircle, 
  Filter, 
  Clock, 
  Brain, 
  CheckCircle, 
  Star, 
  Users, 
  Zap,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import heroInbox from '@/assets/hero-inbox.jpg';
import aiFeatures from '@/assets/ai-features.jpg';

const InboxZenLanding = () => {
  const [email, setEmail] = useState('');

  const handleWaitlistJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for joining the waitlist with ${email}!`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Theme Toggle */}
      <header className="absolute top-0 right-0 z-50 p-6">
        <ThemeToggle />
      </header>
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-charcoal leading-tight">
                  Reclaim Your Time. Let AI Manage Your Inbox.
                </h1>
                <p className="text-xl text-slate-gray leading-relaxed">
                  InboxZen drafts responses, sorts emails, and summarizes long threads — all inside your existing inbox.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="zen" size="lg" className="group">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="zenOutline" size="lg">
                  See How It Works 
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-slate-gray">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-accent-green" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-accent-green" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-zen">
                <img 
                  src={heroInbox} 
                  alt="InboxZen AI-powered email interface" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-zen-blue/20 to-accent-green/20 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem + Solution Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Drowning in Emails? You're Not Alone.
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Modern professionals receive 100+ emails daily. InboxZen transforms chaos into clarity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Smart Filters",
                problem: "100+ unread emails daily",
                solution: "Prioritize what's urgent"
              },
              {
                icon: MessageCircle,
                title: "Reply Suggestions",
                problem: "Manually triaging priority",
                solution: "Auto-drafted responses"
              },
              {
                icon: Brain,
                title: "Thread Summaries", 
                problem: "Spending hours on replies",
                solution: "2-line TL;DRs"
              },
              {
                icon: Filter,
                title: "Auto-Labeling",
                problem: "Missing follow-ups",
                solution: "Sort by project, client, urgency"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white border-0 shadow-card hover:shadow-zen transition-shadow duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-soft-indigo rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="h-6 w-6 text-zen-blue" />
                  </div>
                  <h3 className="font-semibold text-charcoal">{item.title}</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-red">❌ {item.problem}</p>
                    <p className="text-sm text-accent-green">✅ {item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-zen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              The Smarter, Faster Inbox Experience
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              AI-powered features that learn your communication style and automate the repetitive work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Smart Replies",
                description: "Context-aware AI generates full draft replies in your voice.",
                badge: "Most Popular"
              },
              {
                icon: Brain,
                title: "Thread Summaries",
                description: "Skip the scroll. One-click summaries for long chains.",
                badge: "Time Saver"
              },
              {
                icon: Filter,
                title: "Auto-Labeling",
                description: "Emails instantly tagged by client, urgency, or topic.",
                badge: "Smart"
              },
              {
                icon: Clock,
                title: "Focus Mode",
                description: "Hide low-priority emails until you're ready.",
                badge: "Focus"
              },
              {
                icon: Zap,
                title: "Send Later",
                description: "Schedule replies or get reminders if someone doesn't respond.",
                badge: "Productivity"
              },
              {
                icon: Users,
                title: "Team Insights",
                description: "Shared filters and team dashboards for better collaboration.",
                badge: "Teams"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-white border-0 shadow-card hover:shadow-zen transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-soft-indigo rounded-full flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-zen-blue" />
                    </div>
                    <Badge variant="secondary" className="bg-accent-green/10 text-accent-green border-0">
                      {feature.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">{feature.title}</h3>
                  <p className="text-slate-gray leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Getting Started is Effortless
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Three simple steps to transform your email experience forever.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Connect Your Email",
                description: "OAuth login with Gmail, Outlook, or Superhuman in under 30 seconds."
              },
              {
                step: "2", 
                title: "Set Your Preferences",
                description: "Choose your tone (casual vs. formal) and priority settings."
              },
              {
                step: "3",
                title: "Let AI Work",
                description: "InboxZen starts learning and working in the background immediately."
              }
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-zen-blue text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{step.title}</h3>
                <p className="text-slate-gray leading-relaxed">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute right-0 top-8 transform translate-x-4">
                    <ArrowRight className="h-6 w-6 text-slate-gray" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-gradient-zen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Trusted by Founders, Freelancers & Fortune 500 Teams
            </h2>
          </div>
          
          {/* Logo Bar */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
            {['Gmail', 'Zapier', 'Notion', 'HubSpot', 'Superhuman'].map((logo) => (
              <div key={logo} className="text-2xl font-semibold text-slate-gray">
                {logo}
              </div>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-card">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-charcoal leading-relaxed">
                  "InboxZen is like having an executive assistant in my inbox. It's saved me at least 6 hours a week."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-soft-indigo rounded-full flex items-center justify-center">
                    <span className="text-zen-blue font-semibold">ST</span>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Sarah T.</p>
                    <p className="text-sm text-slate-gray">Startup COO</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-card">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-charcoal leading-relaxed">
                  "Thread summaries are life-changing. I haven't read a full email chain in weeks."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-soft-indigo rounded-full flex items-center justify-center">
                    <span className="text-zen-blue font-semibold">JL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Jason L.</p>
                    <p className="text-sm text-slate-gray">Freelance Consultant</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Start Free. Upgrade When You're Ready.
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Transparent pricing that scales with your needs. No hidden fees.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$0",
                period: "/month",
                description: "Perfect for getting started",
                features: [
                  "AI replies (10/day)",
                  "Basic email sorting", 
                  "Thread summaries",
                  "Email support"
                ],
                popular: false
              },
              {
                name: "Pro",
                price: "$9",
                period: "/month",
                description: "For busy professionals",
                features: [
                  "Unlimited AI replies",
                  "Advanced summaries",
                  "Smart snoozing",
                  "Focus mode",
                  "Priority support"
                ],
                popular: true
              },
              {
                name: "Teams",
                price: "$29",
                period: "/month",
                description: "For teams and organizations",
                features: [
                  "Everything in Pro",
                  "Team dashboards",
                  "Shared filters",
                  "Admin controls",
                  "Dedicated support"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative bg-white border-2 ${plan.popular ? 'border-zen-blue shadow-zen' : 'border-border'} hover:shadow-zen transition-shadow duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-zen-blue text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-charcoal">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mt-2">
                      <span className="text-4xl font-bold text-charcoal">{plan.price}</span>
                      <span className="text-slate-gray">{plan.period}</span>
                    </div>
                    <p className="text-slate-gray mt-2">{plan.description}</p>
                  </div>
                  
                  <Button 
                    variant={plan.popular ? "zen" : "zenOutline"} 
                    size="lg" 
                    className="w-full"
                  >
                    Try Free for 14 Days
                  </Button>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent-green flex-shrink-0" />
                        <span className="text-slate-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal">
              Ready to Zen Your Inbox?
            </h2>
            <p className="text-xl text-slate-gray">
              Join 2,000+ professionals saving hours with InboxZen.
            </p>
            
            <form onSubmit={handleWaitlistJoin} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 rounded-full border-zen-blue focus:ring-zen-blue"
                required
              />
              <Button type="submit" variant="zen" size="lg">
                Join the Waitlist
              </Button>
            </form>
            
            <p className="text-sm text-slate-gray">
              No spam. Just one early access invite.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">InboxZen</h3>
              <p className="text-gray-400">Built for peace of mind.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="flex gap-4 justify-end">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>InboxZen © 2025 — Built for peace of mind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InboxZenLanding;