import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code, Database, Server, Brain, Cloud, BarChart3, Wrench, Terminal, Layers, Users } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  programming: <Code className="h-5 w-5" />,
  toolsFrameworks: <Wrench className="h-5 w-5" />,
  cloudDatabases: <Database className="h-5 w-5" />,
  mlAiFrameworks: <Brain className="h-5 w-5" />,
  softSkills: <Users className="h-5 w-5" />,
};

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-10 md:py-16 relative bg-secondary/20">
      <div className="section-container">
        <div ref={ref} className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([key, category], i) => (
              <div
                key={key}
                className={`glass-card rounded-xl p-6 hover-lift transition-all ${isVisible ? 'animate-fade-up' : ''
                  }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {iconMap[key]}
                  </div>
                  <h3 className="font-semibold text-foreground">{category.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
