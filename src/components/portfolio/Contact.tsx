import { useIntersection } from '@/hooks/use-intersection'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const LINKS = [
  {
    label: 'Email',
    value: 'ahmedbadra29@gmail.com',
    href: 'mailto:ahmedbadra29@gmail.com',
    description: 'Best way to reach me',
  },
  {
    label: 'GitHub',
    value: 'github.com/ahmedbadra29',
    href: 'https://github.com/ahmedbadra29',
    description: 'See my code',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ahmedbadra',
    href: 'https://linkedin.com/in/ahmedbadra',
    description: 'Connect professionally',
  },
  {
    label: 'Phone',
    value: '+(20) 115 866 7913',
    href: 'tel:+201158667913',
    description: 'Cairo, Egypt',
  },
]

export function Contact() {
  const { ref, isVisible } = useIntersection()

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-24 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn('mb-14 reveal', isVisible && 'visible')}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">Contact</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Let's work together
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg">
            Whether it's quality consulting, a QA role, or just a conversation about software —
            I'm always open to meaningful work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={cn(
                'group block p-5 rounded-lg border border-border bg-card hover:border-accent/50 hover:shadow-sm transition-all',
                'reveal',
                `reveal-delay-${i + 1}`,
                isVisible && 'visible'
              )}
            >
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
                {link.label}
              </p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors break-all leading-snug mb-1">
                {link.value}
              </p>
              <p className="text-xs text-muted-foreground">{link.description}</p>
            </a>
          ))}
        </div>

        <div className={cn('mt-12 text-center reveal reveal-delay-5', isVisible && 'visible')}>
          <Separator className="mb-10" />
          <p className="text-sm text-muted-foreground mb-4">
            Open to roles in QA engineering, SDET, and quality-focused product engineering.
          </p>
          <Button asChild size="lg">
            <a href="mailto:ahmedbadra29@gmail.com">
              Send a message
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
