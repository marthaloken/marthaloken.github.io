import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import type {
  Section,
  TextSection,
  InsightSection,
  PrototypeSection,
  OutcomeSection,
  VisualSection,
} from '../types'
import WorkshopTimeline from '../components/diagrams/WorkshopTimeline'
import DivergenceConvergenceDiagram from '../components/diagrams/DivergenceConvergenceDiagram'
import DfoWireframes from '../components/diagrams/DfoWireframes'
import DesignIterations from '../components/diagrams/DesignIterations'
import styles from './ProjectDetail.module.css'

/* ── Section renderers ────────────────────────────────────────── */

function TextSectionBlock({ section }: { section: TextSection }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      <div className={styles.bodyText}>
        {section.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  )
}

function InsightSectionBlock({ section }: { section: InsightSection }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      <ul className={styles.insightGrid} role="list">
        {section.items.map((item, i) => (
          <li key={i} className={styles.insightCard}>
            <h3 className={styles.insightTitle}>{item.title}</h3>
            <p className={styles.insightBody}>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PrototypeSectionBlock({ section }: { section: PrototypeSection }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      <ol className={styles.prototypeList} role="list">
        {section.items.map((item, i) => (
          <li key={i} className={styles.prototypeItem}>
            <div className={styles.prototypeNumber} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className={styles.prototypeContent}>
              <h3 className={styles.prototypeTitle}>{item.title}</h3>
              <p className={styles.prototypeDesc}>{item.description}</p>
              {item.detail && (
                <p className={styles.prototypeDetail}>{item.detail}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function OutcomeSectionBlock({ section }: { section: OutcomeSection }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      <ul className={styles.outcomeList} role="list">
        {section.items.map((item, i) => (
          <li key={i} className={styles.outcomeItem}>
            <span className={styles.outcomeDot} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      {section.reflection && (
        <blockquote className={styles.reflection}>
          <p>{section.reflection}</p>
        </blockquote>
      )}
    </div>
  )
}

const visualComponents: Record<VisualSection['componentKey'], React.ReactElement> = {
  'workshop-timeline': <WorkshopTimeline />,
  'divergence-diagram': <DivergenceConvergenceDiagram />,
  'dfo-wireframes': <DfoWireframes />,
  'design-iterations': <DesignIterations />,
}

function VisualSectionBlock({ section }: { section: VisualSection }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeading}>{section.heading}</h2>
      {visualComponents[section.componentKey]}
      {section.caption && (
        <p className={styles.visualCaption}>{section.caption}</p>
      )}
    </div>
  )
}

function renderSection(section: Section, index: number) {
  switch (section.type) {
    case 'text':
      return <TextSectionBlock key={index} section={section} />
    case 'insights':
      return <InsightSectionBlock key={index} section={section} />
    case 'prototypes':
      return <PrototypeSectionBlock key={index} section={section} />
    case 'outcomes':
      return <OutcomeSectionBlock key={index} section={section} />
    case 'visual':
      return <VisualSectionBlock key={index} section={section} />
  }
}

/* ── Main component ───────────────────────────────────────────── */

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const { caseStudy } = project

  return (
    <main className={styles.page}>
      {/* Back link */}
      <div className={styles.backRow}>
        <div className="container">
          <Link to="/projects" className={styles.back}>
            ← All projects
          </Link>
        </div>
      </div>

      {/* Hero */}
      <header
        className={styles.hero}
        style={{ backgroundColor: project.accentColor }}
        aria-labelledby="project-title"
      >
        <div className="container">
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>{project.subtitle}</p>
            <h1 id="project-title" className={styles.heroTitle}>
              {project.title}
            </h1>
            <p className={styles.heroDesc}>{project.description}</p>
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className={styles.overview} aria-label="Project overview">
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewBlock}>
              <h2 className={styles.overviewLabel}>The challenge</h2>
              <p className={styles.overviewValue}>{caseStudy.overview.problem}</p>
            </div>
            <div className={styles.overviewMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>{caseStudy.overview.role}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>{caseStudy.overview.timeline}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Methods</span>
                <ul className={styles.tagList} role="list">
                  {caseStudy.overview.methods.map((m) => (
                    <li key={m} className={styles.tag}>{m}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Tools</span>
                <ul className={styles.tagList} role="list">
                  {caseStudy.overview.tools.map((t) => (
                    <li key={t} className={styles.tag}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case study sections */}
      <div className={styles.body}>
        <div className="container">
          <div className={styles.bodyInner}>
            {caseStudy.sections.map((section, i) => renderSection(section, i))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className={styles.footerCta}>
        <div className="container">
          <Link to="/projects" className={styles.footerBack}>
            ← Back to all projects
          </Link>
        </div>
      </div>
    </main>
  )
}
