import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.name}>Martha Hoel Løken</p>
        <nav aria-label="Footer navigation" className={styles.nav}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/projects" className={styles.link}>Projects</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </nav>
        <p className={styles.copy}>© {year} Martha Hoel Løken</p>
      </div>
    </footer>
  )
}
