export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  year: string
  role: string
  accentColor: string
  featured: boolean
  caseStudy: CaseStudy
}

export interface CaseStudy {
  overview: Overview
  sections: Section[]
}

export interface Overview {
  problem: string
  role: string
  timeline: string
  methods: string[]
  tools: string[]
}

export type Section =
  | TextSection
  | InsightSection
  | PrototypeSection
  | OutcomeSection
  | VisualSection

export interface TextSection {
  type: 'text'
  heading: string
  body: string[]
}

export interface InsightSection {
  type: 'insights'
  heading: string
  items: { title: string; body: string }[]
}

export interface PrototypeSection {
  type: 'prototypes'
  heading: string
  items: { title: string; description: string; detail?: string }[]
}

export interface OutcomeSection {
  type: 'outcomes'
  heading: string
  items: string[]
  reflection?: string
}

export interface VisualSection {
  type: 'visual'
  heading: string
  componentKey: 'workshop-timeline' | 'divergence-diagram' | 'dfo-wireframes' | 'design-iterations'
  caption?: string
}
