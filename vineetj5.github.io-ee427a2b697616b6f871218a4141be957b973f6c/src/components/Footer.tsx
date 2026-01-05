import { Github, Linkedin, Mail, BookOpen, Heart } from 'lucide-react';
import { siteConfig } from '@/data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: siteConfig.github, label: 'GitHub' },
    { icon: Linkedin, href: siteConfig.linkedin, label: 'LinkedIn' },
    { icon: BookOpen, href: siteConfig.medium, label: 'Medium' },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Built With */}
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <span>Built with</span>
            <Heart className="h-3 w-3 text-destructive" />
            <span>using React + Tailwind • Hosted on GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
