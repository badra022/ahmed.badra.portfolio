import { useIntersection } from '@/hooks/use-intersection'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const PROJECTS = [
  {
    name: 'AI Swallowing Kinematics Toolkit',
    description:
      'Graduation project (Excellent grade). An AI-powered Python/Qt desktop toolkit for automatic identification of swallowing kinematics in X-Ray video fluoroscopy using Deep Neural Networks, Optical Flow, and real-time detection/segmentation models.',
    tags: ['Python', 'Qt', 'Deep Learning', 'OpenCV', 'Optical Flow', 'Segmentation'],
    category: 'AI / Medical',
    highlight: true,
  },
  {
    name: 'BARTOS — Real-Time OS',
    description:
      'A preemptive real-time operating system for ARM Cortex-M MCUs, implementing task scheduling, delays, semaphores, and message queuing entirely in C.',
    tags: ['C', 'ARM', 'RTOS', 'Embedded'],
    category: 'Embedded Systems',
    highlight: true,
  },
  {
    name: 'Hospital Information System (HIS)',
    description:
      'A full-featured hospital information web application built with Python, Flask, and SQLAlchemy — managing patients, staff, records, and appointments.',
    tags: ['Python', 'Flask', 'SQLAlchemy', 'Web', 'Healthcare'],
    category: 'Full-Stack Web',
    highlight: true,
  },
  {
    name: 'Indoor Localization System',
    description:
      'IoT system for object tracking and security using ESP8266 and C++. Powered by an AI model that identifies object location based on network signal readings.',
    tags: ['C++', 'ESP8266', 'IoT', 'AI', 'Networking'],
    category: 'IoT / AI',
    highlight: false,
  },
  {
    name: 'FOTA — Firmware Over-the-Air',
    description:
      'An over-the-air firmware updater for ARM microcontrollers using a custom bootloader and a PHP web interface for distributing firmware updates.',
    tags: ['C', 'ARM', 'Bootloader', 'PHP', 'Embedded'],
    category: 'Embedded Systems',
    highlight: false,
  },
  {
    name: 'ML Car Price Predictor',
    description:
      'A machine learning web application (Python/Flask) that predicts used car prices using trained regression models. Built during ML internship at Technocolabs.',
    tags: ['Python', 'Flask', 'Machine Learning', 'Data Science'],
    category: 'ML / Web',
    highlight: false,
  },
  {
    name: 'Audio Recognizer (Shazam-like)',
    description:
      'A Qt desktop application using Python that recognizes audio by computing and comparing audio fingerprints against a local signature database.',
    tags: ['Python', 'Qt', 'Signal Processing', 'DSP'],
    category: 'Desktop / DSP',
    highlight: false,
  },
  {
    name: 'Huffman Encoder / Decoder',
    description:
      'Qt/C++ desktop application for lossless X-ray image compression using Huffman coding — built with a focus on efficiency and correctness.',
    tags: ['C++', 'Qt', 'Compression', 'Algorithms'],
    category: 'Desktop / Algorithms',
    highlight: false,
  },
  {
    name: 'AUTOSAR Port Driver',
    description:
      'An embedded system driver running on ARM Tiva-C that fully complies with MISRA-C coding standards and AUTOSAR software architecture requirements.',
    tags: ['C', 'ARM', 'AUTOSAR', 'MISRA-C', 'Automotive'],
    category: 'Automotive',
    highlight: false,
  },
  {
    name: 'BioSignal Remote Monitor',
    description:
      'An IoT system that wirelessly tracks live biological signals from an incubator, enabling remote monitoring of critical parameters.',
    tags: ['IoT', 'C++', 'Wireless', 'Biomedical'],
    category: 'IoT / Biomedical',
    highlight: false,
  },
  {
    name: 'Security Locking System',
    description:
      'An embedded system on ATmega32 using C, consisting of two ECUs — one for door locking and one for the human interface — communicating via UART.',
    tags: ['C', 'AVR', 'ATmega32', 'UART', 'Embedded'],
    category: 'Embedded Systems',
    highlight: false,
  },
  {
    name: 'Image Mixer',
    description:
      'A Qt desktop application using Python that blends the amplitude and frequency components of two input images with real-time user control.',
    tags: ['Python', 'Qt', 'Image Processing', 'FFT'],
    category: 'Desktop / DSP',
    highlight: false,
  },
]

export function Projects() {
  const { ref, isVisible } = useIntersection()

  const featured = PROJECTS.filter((p) => p.highlight)
  const rest = PROJECTS.filter((p) => !p.highlight)

  return (
    <section id="projects" ref={ref as React.RefObject<HTMLDivElement>} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn('mb-14 reveal', isVisible && 'visible')}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">Projects</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Things I've built
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg">
            From real-time operating systems to full-stack web applications — a builder's range.
          </p>
        </div>

        {/* Featured */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {featured.map((project, i) => (
            <div
              key={project.name}
              className={cn(
                'group p-6 rounded-lg border border-border bg-card hover:border-accent/50 hover:shadow-md transition-all',
                'reveal',
                `reveal-delay-${i + 1}`,
                isVisible && 'visible'
              )}
            >
              <div className="flex items-start justify-between mb-3">
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
                <span className="text-xs text-accent font-medium">Featured</span>
              </div>
              <h3 className="font-serif text-base font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Rest */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <div
              key={project.name}
              className={cn(
                'group p-5 rounded-lg border border-border bg-card/60 hover:border-accent/40 hover:bg-card transition-all',
                'reveal',
                `reveal-delay-${(i % 3) + 1}`,
                isVisible && 'visible'
              )}
            >
              <Badge variant="secondary" className="text-xs mb-3">
                {project.category}
              </Badge>
              <h3 className="font-serif text-sm font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
