import { useIntersection } from '@/hooks/use-intersection'
import { cn } from '@/lib/utils'

const HIGHLIGHTS = [
  {
    icon: '⚙',
    title: 'Deep Systems Roots',
    body: 'Started in embedded & automotive. I understand software at every layer — from bare-metal firmware to distributed cloud services.',
  },
  {
    icon: '🤖',
    title: 'AI-Native Workflow',
    body: 'Daily practitioner of agentic AI — Cursor, Claude Code, Copilot. I apply AI to accelerate QA work products: test plans, test generation, defect analysis.',
  },
  {
    icon: '📊',
    title: 'Business-Oriented',
    body: 'Quality that delivers business value. I care about release velocity, coverage metrics, and the real cost of defects reaching users.',
  },
  {
    icon: '🏗',
    title: 'Builder at Heart',
    body: 'Beyond testing — I have built full-stack web apps, desktop applications, IoT systems, and real-time OS kernels from scratch.',
  },
]

export function About() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="about" ref={ref as React.RefObject<HTMLDivElement>} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className={cn('mb-14 reveal', isVisible && 'visible')}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">About Me</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Quality is not a checkpoint —<br className="hidden sm:block" /> it's a culture.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio */}
          <div className={cn('space-y-5 reveal reveal-delay-1', isVisible && 'visible')}>
            <p className="text-base text-muted-foreground leading-7">
              I'm a Software QA Engineer and SDET currently at{' '}
              <span className="text-foreground font-medium">Siemens Digital Industries Software</span> in Cairo.
              My background in Systems and Biomedical Engineering from Cairo University gave me a rigorous,
              first-principles approach to problem solving.
            </p>
            <p className="text-base text-muted-foreground leading-7">
              With over two years of development experience before pivoting to QA, I bring
              a unique perspective: I understand the code I test. I've written automation frameworks,
              improved test coverage from 40% to 90%, and cut regression cycles by half.
            </p>
            <p className="text-base text-muted-foreground leading-7">
              I've worked across embedded automotive, marketing automation, healthcare, fintech,
              data pipelines — and I thrive in the complexity each brings. My goal is always the same:
              <span className="text-foreground font-medium"> ship software that works, and prove it.</span>
            </p>

            <div className="pt-2 space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Cairo, Egypt</span>
                {' · '}
                <a href="mailto:ahmedbadra29@gmail.com" className="hover:text-primary transition-colors">
                  ahmedbadra29@gmail.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                B.Sc. Systems &amp; Biomedical Engineering — Cairo University, 2022
                {' · '}
                <span className="text-foreground font-medium">Honors (83.2%)</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Certified{' '}
                <span className="text-foreground font-medium">ISTQB / TQB Tester</span>
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.title}
                className={cn(
                  'p-5 rounded-lg border border-border bg-card hover:border-accent/40 transition-colors',
                  'reveal',
                  `reveal-delay-${i + 2}`,
                  isVisible && 'visible'
                )}
              >
                <div className="text-2xl mb-3 select-none">{h.icon}</div>
                <h4 className="font-serif text-base font-semibold text-foreground mb-2">{h.title}</h4>
                <p className="text-sm text-muted-foreground leading-6">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
