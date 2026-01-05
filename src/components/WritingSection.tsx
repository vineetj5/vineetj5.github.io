import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { siteConfig, blogPosts } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Calendar, Clock, BookOpen } from 'lucide-react';

export function WritingSection() {
  const { ref, isVisible } = useScrollAnimation();

  // Helper to format date if needed, though they are pre-formatted strings in content
  // If we assume the content strings are "Month DD, YYYY" we can just display them directly
  // or use the existing formatDate if we want to ensure consistent formatting.
  // Given they are just strings in the new data, we can render directly.

  return (
    <section id="writing" className="py-10 md:py-16 relative">
      <div className="section-container">
        <div ref={ref} className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Medium Articles</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technical articles on data engineering, machine learning, and building production systems
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Blog Posts Grid */}
          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <a
                  key={i}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card rounded-xl p-6 hover-lift transition-all group block ${isVisible ? 'animate-fade-up' : ''
                    }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Thumbnail - Optional if we add images later, current data has none */}
                  {post.coverImage && (
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-secondary">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Snippet */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag, j) => (
                        <Badge key={j} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Read Link */}
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <BookOpen className="h-4 w-4" />
                    <span>Read on Medium</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              <p>No posts available at the moment.</p>
            </div>
          )}

          {/* Follow CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
              asChild
            >
              <a href={siteConfig.medium} target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-5 w-5 mr-2" />
                Follow on Medium
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
