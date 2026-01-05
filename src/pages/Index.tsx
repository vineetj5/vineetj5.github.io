import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { WritingSection } from '@/components/WritingSection';
import { EducationSection } from '@/components/EducationSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/data/content';

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.name,
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "email": siteConfig.email,
    "telephone": siteConfig.phone,
    "jobTitle": "Data Engineer / ML Engineer",
    "description": siteConfig.hero.subtext.join(' '),
    "sameAs": [
      siteConfig.github,
      siteConfig.linkedin,
      siteConfig.medium
    ],
    "knowsAbout": [
      "Data Engineering",
      "Machine Learning",
      "Python",
      "Apache Airflow",
      "Azure",
      "GenAI",
      "NLP",
      "RAG"
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "University of Maryland, College Park"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "PES University"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{siteConfig.name} | Data Engineer & ML Engineer</title>
        <meta name="description" content={`${siteConfig.name} - ${siteConfig.hero.subtext[0]}`} />
        <meta name="keywords" content="Data Engineer, ML Engineer, Software Engineer, Python, Data Science, Machine Learning, NLP, GenAI, RAG, Azure, Databricks" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${siteConfig.name} | Data Engineer & ML Engineer`} />
        <meta property="og:description" content={siteConfig.hero.subtext[0]} />
        <meta property="og:site_name" content={siteConfig.name} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${siteConfig.name} | Data Engineer & ML Engineer`} />
        <meta name="twitter:description" content={siteConfig.hero.subtext[0]} />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>

        {/* Canonical */}
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <WritingSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
