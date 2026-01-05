import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { projects, type Project, type ProjectCategory } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Github, ExternalLink, FileText, ArrowRight } from 'lucide-react';

const categories: ProjectCategory[] = ["Data Eng", "ML", "GenAI", "NLP", "Analytics"];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-10 md:py-16 relative bg-secondary/20">
      <div className="section-container">
        <div ref={ref} className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end solutions spanning data pipelines, ML models, and GenAI applications
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={activeFilter === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("All")}
              className={activeFilter === "All" ? "bg-primary text-primary-foreground" : ""}
            >
              All
            </Button>
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeFilter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(cat)}
                className={activeFilter === cat ? "bg-primary text-primary-foreground" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`glass-card rounded-xl p-6 hover-lift transition-all cursor-pointer group ${isVisible ? 'animate-fade-up' : ''
                  }`}
                style={{ animationDelay: `${i * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                {project.image && (
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-secondary/30 border border-border/50 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Categories */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.categories.map(cat => (
                    <Badge
                      key={cat}
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>

                {/* Title & Pitch */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.pitch}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map(tech => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech.length - 4}
                    </Badge>
                  )}
                </div>

                {/* View Details */}
                <div className="flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto glass-card border-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {selectedProject.categories.map(cat => (
                    <Badge
                      key={cat}
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
                <DialogTitle className="text-xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedProject.pitch}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Problem → Approach → Impact */}
                <div className="space-y-4">
                  <div className="glass-card rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-primary mb-2">Problem</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.problem}</p>
                  </div>
                  <div className="glass-card rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-primary mb-2">Approach</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.approach}</p>
                  </div>
                  <div className="glass-card rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-primary mb-2">Impact</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.impact}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(tech => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                  {selectedProject.github && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {selectedProject.writeup && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={selectedProject.writeup} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-2" />
                        Write-up
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
