import styles from './WorkshopTimeline.module.css'

const workshops = [
  {
    date: '18 Oct 2023',
    label: 'Workshop 1 — Generative',
    title: 'Collaging & contextual probes',
    participants: 'DFØ employees and design team',
    activities: [
      'Collaging exercise to surface values and frustrations',
      'Contextual probes exploring daily timesheet routines',
      'Mapping pain points in the existing DFØ app',
    ],
  },
  {
    date: '5 Nov 2023',
    label: 'Workshop 2 — Generative',
    title: 'Co-design & ideation',
    participants: 'DFØ employees and design team',
    activities: [
      'Future-scenario ideation around improved workflows',
      'Collaborative feature prioritisation',
      'Paper prototyping of key interactions',
    ],
  },
  {
    date: '14 Nov 2023',
    label: 'Workshop 3 — Evaluative',
    title: 'Prototype walkthrough & feedback',
    participants: 'DFØ employees and design team',
    activities: [
      'Think-aloud walkthrough of Figma prototype',
      'Structured feedback on key screens',
      'Prioritisation voting on proposed features',
    ],
  },
]

export default function WorkshopTimeline() {
  return (
    <div className={styles.timeline} role="list" aria-label="Workshop timeline">
      {workshops.map((w, i) => (
        <div key={i} className={styles.item} role="listitem">
          <div className={styles.track} aria-hidden="true">
            <span className={styles.number}>{i + 1}</span>
            {i < workshops.length - 1 && <span className={styles.connector} />}
          </div>
          <div className={styles.content}>
            <p className={styles.date}>{w.date}</p>
            <p className={styles.label}>{w.label}</p>
            <p className={styles.title}>{w.title}</p>
            <p className={styles.participants}>{w.participants}</p>
            <ul className={styles.activities}>
              {w.activities.map((a, j) => (
                <li key={j}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
