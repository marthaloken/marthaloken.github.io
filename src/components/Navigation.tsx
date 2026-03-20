import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navigation.module.css'

export default function Navigation() {
  const location = useLocation()

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.inner}>
          <NavLink to="/" className={styles.logo} aria-label="Martha Hoel Løken — home">
            MHL
          </NavLink>
          <ul className={styles.links} role="list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  [styles.link, isActive ? styles.active : ''].join(' ')
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  [
                    styles.link,
                    isActive || location.pathname.startsWith('/projects/')
                      ? styles.active
                      : '',
                  ].join(' ')
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  [styles.link, isActive ? styles.active : ''].join(' ')
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
