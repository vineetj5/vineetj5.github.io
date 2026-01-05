import { GraduationCap, CheckCircle, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { aboutContent, education, siteConfig } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-10 md:py-16 relative">
      <div className="section-container">
        <div ref={ref} className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="flex flex-col gap-12">
            {/* Left Column - Profile Image + About Text */}
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-left">
                {/* Profile Image */}
                <div className="flex justify-center lg:justify-start flex-shrink-0">
                  <div className="relative">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
                      <img
                        src={aboutContent.profileImage}
                        alt={siteConfig.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-primary-foreground text-lg">👋</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {aboutContent.intro}
                </p>
              </div>

              {/* What I'm Looking For */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">What I'm Looking For</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {siteConfig.availability.type}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.openToRoles.map((role) => (
                    <Badge key={role} variant="outline" className="text-xs">
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* What I Bring */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6">What I Bring</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {aboutContent.whatIBring.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-muted-foreground p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
