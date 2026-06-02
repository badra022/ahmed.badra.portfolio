import { Navigation } from '@/components/portfolio/Navigation'
import { Hero } from '@/components/portfolio/Hero'
import { About } from '@/components/portfolio/About'
import { Experience } from '@/components/portfolio/Experience'
import { Skills } from '@/components/portfolio/Skills'
import { Industries } from '@/components/portfolio/Industries'
import { Projects } from '@/components/portfolio/Projects'
import { Certifications } from '@/components/portfolio/Certifications'
import { Education } from '@/components/portfolio/Education'
import { Contact } from '@/components/portfolio/Contact'
import { Footer } from '@/components/portfolio/Footer'

export function App() {
  return (
    <div className="min-h-svh bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Industries />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
