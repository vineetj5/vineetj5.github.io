import { GraduationCap, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { education } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function EducationSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="education" className="py-10 md:py-16 relative">
            <div className="section-container">
                <div ref={ref} className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            My <span className="gradient-text">Education</span>
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {education.map((edu, i) => (
                            <div
                                key={i}
                                className={`glass-card rounded-xl p-6 hover-lift transition-all ${
                                    /* @ts-ignore */
                                    edu.current ? 'border-primary/50 bg-primary/5 shadow-lg shadow-primary/5' : ''
                                    }`}
                            >
                                <div className="flex gap-4">
                                    {/* @ts-ignore */}
                                    {edu.logo && (
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-12 h-12 rounded-lg bg-secondary/30 p-2 flex items-center justify-center border border-border/50">
                                                {/* @ts-ignore */}
                                                <img
                                                    src={edu.logo}
                                                    alt={edu.institution}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex-grow">
                                        {/* Institution Name & Location */}
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <h4 className="font-semibold text-foreground text-xl">{edu.institution}</h4>
                                                {/* @ts-ignore */}
                                                {edu.current && (
                                                    <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/50">
                                                        Current
                                                    </Badge>
                                                )}
                                            </div>
                                            {/* @ts-ignore */}
                                            {edu.location && (
                                                <div className="flex items-center text-sm text-muted-foreground gap-1 bg-secondary/30 px-2 py-1 rounded self-start md:self-auto">
                                                    <MapPin className="h-3 w-3" />
                                                    {/* @ts-ignore */}
                                                    <span>{edu.location}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Degree and Date Row */}
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                                            <p className="text-primary font-medium">{edu.degree}</p>
                                            <Badge variant="outline" className="text-xs self-start shrink-0">
                                                {edu.period}
                                            </Badge>
                                        </div>

                                        {/* @ts-ignore */}
                                        {edu.gpa && (
                                            <div className="mb-3">
                                                {/* @ts-ignore */}
                                                <span className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded">CGPA: {edu.gpa}</span>
                                            </div>
                                        )}

                                        {edu.coursework.length > 0 && (
                                            <div className="mt-4">
                                                <p className="text-sm text-muted-foreground mb-2 font-medium">Relevant Coursework:</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {edu.coursework.map((course, j) => (
                                                        <Badge key={j} variant="secondary" className="text-xs">
                                                            {course}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* @ts-ignore */}
                                        {edu.minor && (
                                            <div className="mt-4 pt-4 border-t border-border/50">
                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                                                    {/* @ts-ignore */}
                                                    <p className="font-medium text-primary">{edu.minor.degree}</p>

                                                    {/* @ts-ignore */}
                                                    <Badge variant="outline" className="text-xs self-start shrink-0 opacity-80">
                                                        {edu.minor.period}
                                                    </Badge>
                                                </div>
                                                {/* @ts-ignore */}
                                                {edu.minor.gpa && (
                                                    <div>
                                                        {/* @ts-ignore */}
                                                        <span className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded">CGPA: {edu.minor.gpa}</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
