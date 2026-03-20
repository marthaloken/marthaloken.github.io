import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <main className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>Portfolio</p>
          <h1 className={styles.heading}>Projects</h1>
          <p className={styles.lead}>
            A selection of UX and interaction design work spanning research,
            prototyping, accessibility, and inclusive design.
          </p>
        </header>

        <section aria-label="All projects">
          <ul className={styles.grid} role="list">
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
