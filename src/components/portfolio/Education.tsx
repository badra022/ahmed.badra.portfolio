import { useIntersection } from '@/hooks/use-intersection'
import { cn } from '@/lib/utils'

export function Education() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="education" ref={ref as React.RefObject<HTMLDivElement>} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn('mb-14 reveal', isVisible && 'visible')}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">Education</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Where it began
          </h2>
        </div>

        <div className={cn('reveal reveal-delay-1', isVisible && 'visible')}>
          <div className="bg-card border border-border rounded-lg p-8 max-w-3xl">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  Cairo University
                </h3>
                <p className="text-base text-primary font-medium">
                  B.Sc. Systems &amp; Biomedical Engineering
                </p>
                <p className="text-sm text-muted-foreground mt-1">Cairo, Egypt</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-medium text-foreground">2017 — 2022</p>
                <p className="text-sm text-accent font-semibold mt-1">83.2% · Very Good with Honors</p>
              </div>
            </div>

            {/* Graduation Project */}
            <div className="border-t border-border pt-6">
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Graduation Project — Excellent Grade
              </p>
              <h4 className="font-serif text-base font-semibold text-foreground mb-2">
                AI-Powered Swallowing Kinematics Toolkit
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built a Python/Qt toolkit for automatic identification of swallowing kinematics
                in X-Ray video fluoroscopy. Leveraged Deep Neural Networks, Optical Flow techniques,
                and real-time detection and segmentation Deep Learning models to assist clinicians
                in diagnosing swallowing disorders.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Python', 'Qt', 'Deep Learning', 'Optical Flow', 'Real-time Segmentation', 'Medical AI'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
