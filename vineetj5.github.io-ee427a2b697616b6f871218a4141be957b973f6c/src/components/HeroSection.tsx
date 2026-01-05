import { Github, Linkedin, Mail, FileText, ChevronDown, MapPin, Calendar, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/data/content';

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--gradient-glow)] opacity-50" />

      <div className="section-container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location & Availability */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-up">
            <Badge variant="outline" className="px-3 py-1 text-sm border-primary/30 text-primary">
              <MapPin className="h-3 w-3 mr-1" />
              {siteConfig.location}
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm border-accent/30 text-accent">
              <Calendar className="h-3 w-3 mr-1" />
              Expected Graduation: {siteConfig.availability.graduation}
            </Badge>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up animation-delay-100">
            <span className="gradient-text">{siteConfig.name}</span>
          </h1>

          {/* Headline */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/90 mb-6 animate-fade-up animation-delay-200">
            {siteConfig.hero.headline}
          </h2>

          {/* Subtext */}
          <div className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto space-y-2 mb-8 animate-fade-up animation-delay-300">
            {siteConfig.hero.subtext.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {/* Availability Status */}
          <div className="flex justify-center mb-6 animate-fade-up animation-delay-400">
            <Badge variant="outline" className="px-3 py-1 text-xs border-primary/30 text-primary bg-primary/5 font-medium">
              <Briefcase className="h-3 w-3 mr-1.5" />
              {siteConfig.availability.type}
            </Badge>
          </div>

          {/* Open to Roles */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-up animation-delay-400">
            <span className="text-sm text-muted-foreground mr-2 flex items-center">Open to:</span>
            {siteConfig.openToRoles.slice(0, 4).map((role) => (
              <Badge key={role} variant="secondary" className="text-xs">
                {role}
              </Badge>
            ))}
            {siteConfig.openToRoles.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{siteConfig.openToRoles.length - 4} more
              </Badge>
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-up animation-delay-500">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
              asChild
            >
              <a href={siteConfig.resumeUrl} download target="_blank" rel="noopener noreferrer">
                <FileText className="h-5 w-5 mr-2" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-4 animate-fade-up animation-delay-500">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover-lift hover:border-primary/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-foreground" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover-lift hover:border-primary/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-3 rounded-full glass-card hover-lift hover:border-primary/50 transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-foreground" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="h-8 w-8 text-muted-foreground/50" />
        </div>
      </div>

    </section>
  );
}
