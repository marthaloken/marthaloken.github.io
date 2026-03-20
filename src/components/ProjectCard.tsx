import { Link } from 'react-router-dom'
import type { Project } from '../types'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
  variant?: 'default' | 'compact'
}

export default function ProjectCard({ project, variant = 'default' }: Props) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={[styles.card, styles[variant]].join(' ')}
      aria-label={`View case study: ${project.title}`}
    >
      <div
        className={styles.thumbnail}
        style={{ backgroundColor: project.accentColor }}
        aria-hidden="true"
      >
        <span className={styles.thumbnailText}>{project.title[0]}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.year}>{project.year}</span>
          <span className={styles.role}>{project.role}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.tags} role="list" aria-label="Project tags">
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
        <span className={styles.cta} aria-hidden="true">
          View case study →
        </span>
      </div>
    </Link>
  )
}
