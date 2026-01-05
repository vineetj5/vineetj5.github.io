import { Badge } from '@/components/ui/badge';
import { experience } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-10 md:py-16 relative">
      <div className="section-container">
        <div ref={ref} className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

            {experience.map((exp, i) => (
              <div
                key={i}
                className={`relative mb-12 last:mb-0 ${isVisible ? 'animate-fade-up' : ''
                  }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-0 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                  {/* Card */}
                  <div className="glass-card rounded-xl p-6 hover-lift transition-all">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        {/* @ts-ignore */}
                        {exp.logo ? (
                          <div className="w-12 h-12 rounded-lg bg-white p-1 flex items-center justify-center border border-border/50 shrink-0">
                            {/* @ts-ignore */}
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Briefcase className="h-5 w-5" />
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold text-foreground">{exp.company}</h3>
                          <p className="text-primary text-sm">{exp.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
