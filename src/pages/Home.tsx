import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { getFeaturedProjects } from '../data/projects'
import styles from './Home.module.css'

const skills = [
  'Interaction Design',
  'Universal Design',
  'WCAG',
  'User Research',
  'Figma',
  'Prototyping',
  'Wireframing',
  'Design Thinking',
  'HCI',
  'Python',
  'Kotlin',
  'SQL',
]

export default function Home() {
  const featured = getFeaturedProjects()

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>UX & Interaction Designer</p>
          <h1 id="hero-heading" className={styles.heroHeading}>
            Martha Hoel Løken
          </h1>
          <p className={styles.heroLead}>
            I design digital systems that are intuitive, accessible, and genuinely
            useful — with a particular focus on universal design and inclusive
            solutions that work for everyone.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/projects" className={styles.ctaPrimary}>
              View my work
            </Link>
            <Link to="/contact" className={styles.ctaSecondary}>
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section className={styles.about} aria-labelledby="about-heading">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2 id="about-heading" className={styles.sectionHeading}>
                About me
              </h2>
              <p>
                I hold a Master of Science in Informatics: Design, Use, and Interaction
                from the University of Oslo, where I focused on participatory design,
                AI, and the methods and methodologies of interaction design. My thesis
                explored how sound can create more inclusive learning environments.
              </p>
              <p>
                Currently I work as a Business Services Consultant at SEB Kort, where
                I help streamline and improve manual processes. Across everything I do,
                I am driven by the belief that complex systems should be intuitive and
                that good design belongs to everyone.
              </p>
              <p>
                I am particularly interested in the intersections of technology, ethics,
                and human experience — especially when it comes to designing for people
                whose needs are often overlooked.
              </p>
              <Link to="/projects" className={styles.aboutCta}>
                See my projects →
              </Link>
            </div>
            <div className={styles.aboutSidebar}>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoHeading}>Education</h3>
                <ul className={styles.infoList} role="list">
                  <li>
                    <span className={styles.infoTitle}>MSc Informatics</span>
                    <span className={styles.infoSub}>
                      Design, Use, Interaction · UiO · 2025
                    </span>
                  </li>
                  <li>
                    <span className={styles.infoTitle}>BSc Informatics</span>
                    <span className={styles.infoSub}>
                      Design, Use, Interaction · UiO · 2023
                    </span>
                  </li>
                </ul>
              </div>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoHeading}>Skills</h3>
                <ul className={styles.skillsList} role="list" aria-label="Skills">
                  {skills.map((skill) => (
                    <li key={skill} className={styles.skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured projects ─────────────────────────────────── */}
      <section className={styles.featured} aria-labelledby="featured-heading">
        <div className="container">
          <div className={styles.featuredHeader}>
            <h2 id="featured-heading" className={styles.sectionHeading}>
              Selected work
            </h2>
            <Link to="/projects" className={styles.viewAll}>
              All projects →
            </Link>
          </div>
          <div className={styles.projectGrid}>
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
