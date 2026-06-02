import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const STATS = [
  { value: '4+', label: 'Years in Software' },
  { value: '2.5+', label: 'Years at Siemens' },
  { value: '15+', label: 'Projects Built' },
  { value: '10+', label: 'Industries Touched' },
]

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-svh flex flex-col justify-center warm-glow overflow-hidden">
      {/* Subtle ornamental top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-[fadeInUp_0.6s_ease_0.2s_forwards]">
            <div className="h-px w-8 bg-accent" />
            <Badge variant="secondary" className="text-xs font-medium tracking-widest uppercase">
              QA Engineer &amp; SDET
            </Badge>
          </div>

          {/* Name */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight tracking-tight mb-5 opacity-0 animate-[fadeInUp_0.6s_ease_0.35s_forwards]">
            Ahmed<br />
            <span className="text-primary">Badra</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8 opacity-0 animate-[fadeInUp_0.6s_ease_0.5s_forwards]">
            Bridging quality and innovation — from embedded automotive systems
            to enterprise-scale data pipelines. I make software you can trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-14 opacity-0 animate-[fadeInUp_0.6s_ease_0.65s_forwards]">
            <Button size="lg" onClick={() => scrollTo('#projects')} className="gap-2">
              View Projects
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo('#contact')}>
              Get in Touch
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="https://github.com/ahmedbadra29" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="opacity-0 animate-[fadeInUp_0.6s_ease_0.8s_forwards]">
            <Separator className="mb-8 bg-border/60" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="font-serif text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors opacity-0 animate-[fadeInUp_0.6s_ease_1s_forwards]"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </button>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
