import { useIntersection } from '@/hooks/use-intersection'
import { cn } from '@/lib/utils'

const INDUSTRIES = [
  {
    name: 'Automotive & Embedded',
    description: 'AUTOSAR, ARM MCUs, real-time OS, firmware over-the-air updates, safety-critical systems.',
    icon: '🚗',
  },
  {
    name: 'Platform Engineering',
    description: 'Microservices, distributed systems, data pipelines, webhooks, frontend platforms at Siemens.',
    icon: '🏗',
  },
  {
    name: 'Healthcare',
    description: 'Hospital information systems, biomedical signal monitoring, AI-powered diagnostic tools.',
    icon: '🏥',
  },
  {
    name: 'Marketing Automation',
    description: 'Tracking, analytics, Segment, Google Tag Manager, Amplitude — measuring what matters.',
    icon: '📣',
  },
  {
    name: 'Data Engineering',
    description: 'Data pipelines, data flows, database systems, ETL processes, data quality validation.',
    icon: '📊',
  },
  {
    name: 'FinTech',
    description: 'Financial software testing requiring high accuracy, compliance, and transaction integrity.',
    icon: '💳',
  },
  {
    name: 'IoT & Connected Systems',
    description: 'Indoor localization, biosignal monitors, ESP8266, wireless communication, edge AI.',
    icon: '📡',
  },
  {
    name: 'Education Technology',
    description: 'Taught embedded systems and software engineering to university-level students.',
    icon: '🎓',
  },
]

export function Industries() {
  const { ref, isVisible } = useIntersection()

  return (
    <section
      id="industries"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-24 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn('mb-14 reveal', isVisible && 'visible')}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">Domain Expertise</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Industries I've navigated
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg">
            Each domain brings unique quality challenges. I've adapted across all of them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((industry, i) => (
            <div
              key={industry.name}
              className={cn(
                'p-5 rounded-lg border border-border bg-card hover:border-accent/40 hover:shadow-sm transition-all',
                'reveal',
                `reveal-delay-${(i % 4) + 1}`,
                isVisible && 'visible'
              )}
            >
              <div className="text-3xl mb-3 select-none">{industry.icon}</div>
              <h4 className="font-serif text-sm font-semibold text-foreground mb-2 leading-snug">
                {industry.name}
              </h4>
              <p className="text-xs text-muted-foreground leading-5">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
