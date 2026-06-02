import { Separator } from '@/components/ui/separator'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            <span className="font-serif font-medium text-foreground">Ahmed Badra</span>
            {' — '}Software QA Engineer &amp; SDET · Cairo, Egypt
          </p>
          <p>© {year} · Built with care</p>
        </div>
      </div>
    </footer>
  )
}
