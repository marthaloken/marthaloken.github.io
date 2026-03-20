import styles from './Contact.module.css'

export default function Contact() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.info}>
            <p className={styles.eyebrow}>Get in touch</p>
            <h1 className={styles.heading}>Contact</h1>
            <p className={styles.lead}>
              I'm always happy to hear about new projects, opportunities, or just
              to connect.
            </p>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:martha@loken.biz" className={styles.contactValue}>
                  martha@loken.biz
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/martha-hoel-loken"
                  className={styles.contactValue}
                  target="_blank"
                  rel="noreferrer"
                >
                  Martha Hoel Løken
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Based in</span>
                <span className={styles.contactValue}>Oslo, Norway</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
