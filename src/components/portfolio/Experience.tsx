import { useIntersection } from '@/hooks/use-intersection'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const EXPERIENCE = [
  {
    company: 'Siemens Digital Industries Software',
    role: 'Software Development Engineer in Test (SDET)',
    period: '2024 — Present',
    location: 'Cairo, Egypt · Hybrid',
    current: true,
    highlights: [
      'Owned and led quality efforts for a platform engineering delivery team — from requirement analysis through test planning and automation',
      'Contributed to the automation framework (Selenium / NightwatchJS) and helped shape testing and automation strategies',
      'Performed testing on microservices, data pipelines, APIs, webhooks, and distributed frontend systems',
      'Conducted smoke, regression, usability, functional, integration, performance, and UAT testing; adopted AI workflows for testing',
      'Improved test coverage from 40% to 90% and implemented testing for legacy services',
      'Cut regression cycle by 50% and improved release management and reporting',
      'Maintained cross-browser/device regression runs using BrowserStack and AWS DeviceFarm',
    ],
    tags: ['Selenium', 'NightwatchJS', 'BrowserStack', 'AWS DeviceFarm', 'Microservices', 'CI/CD', 'AI Workflows'],
  },
  {
    company: 'TeacherOn',
    role: 'Software Instructor',
    period: '2022 — 2024',
    location: 'Remote',
    current: false,
    highlights: [
      'Taught university students C, C++, Data Structures, Embedded Systems, and Microprocessor fundamentals',
    ],
    tags: ['C/C++', 'Data Structures', 'Embedded Systems', 'Microprocessors'],
  },
  {
    company: 'Technocolabs',
    role: 'Machine Learning Engineer (Intern)',
    period: '2022',
    location: 'Remote',
    current: false,
    highlights: [
      'Built a machine learning-powered web application using Python/Flask for car price prediction',
    ],
    tags: ['Python', 'Flask', 'Machine Learning'],
  },
]

export function Experience() {
  const { ref, isVisible } = useIntersection()

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-24 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn('mb-14 reveal', isVisible && 'visible')}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">Experience</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Where I've worked
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {EXPERIENCE.map((job, i) => (
              <div
                key={job.company}
                className={cn(
                  'relative pl-16 md:pl-20 reveal',
                  `reveal-delay-${i + 1}`,
                  isVisible && 'visible'
                )}
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    'absolute left-4 md:left-6 top-1.5 w-4 h-4 rounded-full border-2 transition-colors',
                    job.current
                      ? 'bg-accent border-accent'
                      : 'bg-background border-border'
                  )}
                />

                <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-colors">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-serif text-lg font-semibold text-foreground">{job.role}</h3>
                        {job.current && (
                          <Badge className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm font-medium text-primary">{job.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-medium text-foreground">{job.period}</p>
                      <p className="text-xs text-muted-foreground">{job.location}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
