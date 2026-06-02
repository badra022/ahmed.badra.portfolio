import { useIntersection } from '@/hooks/use-intersection'
import { cn } from '@/lib/utils'

const CERTS = [
  {
    name: 'ISTQB / TQB Software Tester',
    issuer: 'International Software Testing Qualifications Board',
    note: 'Professional Certification',
  },
  {
    name: 'AWS DevOps 90 & Linux for Cloud',
    issuer: 'Cloud Native Base Camp',
  },
  {
    name: 'React Web Development',
    issuer: 'DEPI — Digital Egypt Pioneers Initiative',
  },
  {
    name: 'Software Training (Desktop Development, C++)',
    issuer: 'Siemens EDA',
  },
  {
    name: 'Embedded Systems — ARM Based',
    issuer: 'Siemens EDA',
  },
  {
    name: 'Algorithmic Toolbox & Data Structures',
    issuer: 'Coursera',
  },
  {
    name: 'Python for Everybody',
    issuer: 'Coursera',
  },
  {
    name: 'NodeJS, Express, MongoDB & More',
    issuer: 'Udemy',
  },
  {
    name: 'AVR & ARM Embedded Systems, Automotive, AUTOSAR',
    issuer: 'Various',
  },
  {
    name: 'Parallel & Concurrent Programming',
    issuer: 'Various',
  },
  {
    name: 'Jenkins & Bitbucket Pipelines',
    issuer: 'Various',
  },
]

export function Certifications() {
  const { ref, isVisible } = useIntersection()

  return (
    <section
      id="certifications"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-24 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn('mb-14 reveal', isVisible && 'visible')}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">Certifications</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Continuous learning
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTS.map((cert, i) => (
            <div
              key={cert.name}
              className={cn(
                'flex gap-4 p-4 rounded-lg border border-border bg-card hover:border-accent/40 transition-colors',
                'reveal',
                `reveal-delay-${(i % 3) + 1}`,
                isVisible && 'visible'
              )}
            >
              <div className="mt-0.5 w-2 h-2 rounded-full bg-accent shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground leading-snug">{cert.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                {cert.note && (
                  <p className="text-xs text-accent font-medium mt-1">{cert.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
