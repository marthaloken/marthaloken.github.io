import styles from './DfoWireframes.module.css'

/* Simplified wireframe mockups of the three key DFO prototype screens */

function StartScreen() {
  return (
    <div className={styles.phone} aria-label="Start screen wireframe">
      <div className={styles.statusBar} aria-hidden="true" />
      <div className={styles.appBar}>
        <span className={styles.appTitle}>DFO Timefoering</span>
      </div>
      <div className={styles.screenBody}>
        <p className={styles.greeting}>Hei, Bjorn</p>
        <p className={styles.dateLabel}>Tirsdag 31. oktober</p>
        <div className={styles.alertBanner} role="alert">
          <span className={styles.alertIcon} aria-hidden="true">!</span>
          Timer ikke sendt — 2 uker
        </div>
        <p className={styles.sectionLabel}>Snarveier</p>
        <div className={styles.shortcuts}>
          <div className={styles.shortcut}>Kontrakt</div>
          <div className={styles.shortcut}>Uketimer</div>
          <div className={styles.shortcut}>Kantine</div>
          <div className={styles.shortcut}>Ferie</div>
        </div>
        <div className={styles.hoursCard}>
          <span className={styles.hoursValue}>6,5 t</span>
          <span className={styles.hoursLabel}>logget i dag</span>
        </div>
      </div>
      <div className={styles.navBar} aria-hidden="true">
        <div className={styles.navItem + ' ' + styles.navActive}>Hjem</div>
        <div className={styles.navItem}>Kalender</div>
        <div className={styles.navItem}>Profil</div>
      </div>
    </div>
  )
}

const calDays = [
  { n: '', w: true },
  { n: '', w: true },
  { n: '1', w: false },
  { n: '2', w: false },
  { n: '3', w: false },
  { n: '4', w: true },
  { n: '5', w: true },
  { n: '6', w: false, h: 7.5 },
  { n: '7', w: false, h: 7.5 },
  { n: '8', w: false, h: 7.5 },
  { n: '9', w: false, h: 7.5 },
  { n: '10', w: false, h: 7.5 },
  { n: '11', w: true },
  { n: '12', w: true },
  { n: '13', w: false, h: 7.5 },
  { n: '14', w: false, h: 7.5 },
  { n: '15', w: false, h: 7.5 },
  { n: '16', w: false, h: 7.5 },
  { n: '17', w: false, h: 7.5 },
  { n: '18', w: true },
  { n: '19', w: true },
  { n: '20', w: false, h: 7.5 },
  { n: '21', w: false, h: 7.5 },
  { n: '22', w: false, h: 7.5 },
  { n: '23', w: false, h: 7.5 },
  { n: '24', w: false, h: 7.5 },
  { n: '25', w: true },
  { n: '26', w: true },
  { n: '27', w: false, h: 7.5 },
  { n: '28', w: false, h: 7.5 },
  { n: '29', w: false, h: 6 },
  { n: '30', w: false },
  { n: '31', w: false, today: true },
]

function CalendarScreen() {
  return (
    <div className={styles.phone} aria-label="Calendar screen wireframe">
      <div className={styles.statusBar} aria-hidden="true" />
      <div className={styles.appBar}>
        <span className={styles.chevron} aria-hidden="true">{'<'}</span>
        <span className={styles.appTitle}>Oktober 2023</span>
        <span className={styles.chevron} aria-hidden="true">{'>'}</span>
      </div>
      <div className={styles.screenBody}>
        <div className={styles.calGrid} aria-label="Calendar grid">
          {['Ma', 'Ti', 'On', 'To', 'Fr', 'Lo', 'So'].map((d) => (
            <div key={d} className={styles.calHeader}>{d}</div>
          ))}
          {calDays.map((d, i) => (
            <div
              key={i}
              className={[
                styles.calDay,
                d.w ? styles.calWeekend : '',
                d.today ? styles.calToday : '',
                d.h ? styles.calLogged : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {d.n && <span className={styles.calDayNum}>{d.n}</span>}
              {d.h && <span className={styles.calBar} aria-hidden="true" />}
            </div>
          ))}
        </div>
        <div className={styles.monthTotal}>
          <span>Totalt oktober:</span>
          <strong>135 t</strong>
        </div>
      </div>
      <div className={styles.navBar} aria-hidden="true">
        <div className={styles.navItem}>Hjem</div>
        <div className={styles.navItem + ' ' + styles.navActive}>Kalender</div>
        <div className={styles.navItem}>Profil</div>
      </div>
    </div>
  )
}

function HourLogScreen() {
  return (
    <div className={styles.phone} aria-label="Hour logging screen wireframe">
      <div className={styles.statusBar} aria-hidden="true" />
      <div className={styles.appBar}>
        <span className={styles.chevron} aria-hidden="true">{'<'}</span>
        <span className={styles.appTitle}>Registrer timer</span>
      </div>
      <div className={styles.screenBody}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Dato</label>
          <div className={styles.formValue}>31. oktober 2023</div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Prosjekt / kontrakt</label>
          <div className={styles.formSelect}>
            IT-support (2023-1234)
            <span className={styles.selectArrow} aria-hidden="true">v</span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Tidsrom</label>
          <div className={styles.timeRow}>
            <div className={styles.timeInput}>08:00</div>
            <span className={styles.timeDash} aria-hidden="true">–</span>
            <div className={styles.timeInput}>16:00</div>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Kommentar (valgfri)</label>
          <div className={styles.formTextarea} />
        </div>
        <button className={styles.submitBtn}>Lagre timer</button>
      </div>
    </div>
  )
}

export default function DfoWireframes() {
  return (
    <figure className={styles.figure}>
      <div className={styles.screens}>
        <div className={styles.screenWrap}>
          <StartScreen />
          <figcaption className={styles.screenCaption}>
            Start screen with shortcuts and unsent-hours alert
          </figcaption>
        </div>
        <div className={styles.screenWrap}>
          <CalendarScreen />
          <figcaption className={styles.screenCaption}>
            Calendar overview with daily hours logged
          </figcaption>
        </div>
        <div className={styles.screenWrap}>
          <HourLogScreen />
          <figcaption className={styles.screenCaption}>
            Hour logging — date, project, and time range
          </figcaption>
        </div>
      </div>
      <figcaption className={styles.mainCaption}>
        DFO Timefoering — key prototype screens (Figma, November 2023). Wireframe recreation.
      </figcaption>
    </figure>
  )
}
