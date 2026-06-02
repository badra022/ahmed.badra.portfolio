import { useIntersection } from '@/hooks/use-intersection'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const SKILL_GROUPS = [
  {
    id: 'qa',
    label: 'QA & Testing',
    skills: [
      'ISTQB / TQB Certified',
      'STLC',
      'Test Planning',
      'Test Case Design',
      'Smoke Testing',
      'Regression Testing',
      'Functional Testing',
      'Integration Testing',
      'Performance Testing',
      'UAT',
      'Usability Testing',
      'API Testing',
      'Microservices Testing',
      'Cross-browser Testing',
      'Mobile Testing',
      'BrowserStack',
      'TestRail',
      'Jira / Confluence',
      'Postman',
      'Agile / Scrum',
    ],
  },
  {
    id: 'automation',
    label: 'Automation',
    skills: [
      'Selenium',
      'Playwright',
      'NightwatchJS',
      'Appium',
      'Cypress',
      'ROBOT Framework',
      'Pytest',
      'JUnit',
      'TestNG',
      'Rest Assured',
      'AWS DeviceFarm',
      'CI/CD Pipelines',
      'Jenkins',
      'Bitbucket Pipelines',
      'GitHub Actions',
      'Test Framework Design',
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      'JavaScript',
      'TypeScript',
      'Java',
      'Python',
      'C',
      'C++',
      'HTML / CSS',
      'Bash / Shell',
      'SQL',
      'PHP',
    ],
  },
  {
    id: 'platforms',
    label: 'Platforms & Tools',
    skills: [
      'AWS',
      'AWS CDK',
      'ReactJS',
      'NodeJS',
      'Flask',
      'Express',
      'MongoDB',
      'SQLAlchemy',
      'Bootstrap',
      'Git / GitHub',
      'Bitbucket',
      'Linux',
      'MS Office',
      'Amplitude',
      'Segment (Twilio)',
      'Google Tag Manager',
    ],
  },
  {
    id: 'ai',
    label: 'AI & Dev Tools',
    skills: [
      'Claude Code',
      'Cursor',
      'GitHub Copilot',
      'Agentic Architecture',
      'AI Test Generation',
      'AI Test Planning',
      'Machine Learning (Python)',
      'Deep Learning',
      'OpenCV',
      'Optical Flow',
    ],
  },
]

export function Skills() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="skills" ref={ref as React.RefObject<HTMLDivElement>} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn('mb-14 reveal', isVisible && 'visible')}>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">Skills</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Tools of the trade
          </h2>
        </div>

        <div className={cn('reveal reveal-delay-1', isVisible && 'visible')}>
          <Tabs defaultValue="qa">
            <TabsList className="flex-wrap h-auto gap-1 bg-muted p-1 mb-8 w-fit">
              {SKILL_GROUPS.map((g) => (
                <TabsTrigger key={g.id} value={g.id} className="text-xs sm:text-sm">
                  {g.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {SKILL_GROUPS.map((g) => (
              <TabsContent key={g.id} value={g.id}>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-sm py-1.5 px-3 border-border text-foreground hover:border-accent hover:bg-accent/10 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
