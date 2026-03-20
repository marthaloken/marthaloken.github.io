import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'aurora-verksted',
    title: 'Inclusive Workplace Tools',
    subtitle: 'Aurora Verksted — IN3010, Spring 2023',
    description:
      'Designing physical and digital tools to democratise participation for workers with functional variations at a sustainable craft workshop in Oslo.',
    tags: ['Interaction Design', 'Physical Prototyping', 'Inclusive Design', 'Arduino'],
    year: '2023',
    role: 'UX Designer & Maker',
    accentColor: '#E8F0E8',
    featured: true,
    caseStudy: {
      overview: {
        problem:
          'Workers with functional variations at Aurora Verksted faced barriers when operating workshop machinery. Existing buttons required grip strength and fine motor skills that not all workers possessed, limiting their participation in production.',
        role: 'UX Designer & Maker — research, prototyping, user testing',
        timeline: 'Spring 2023 (IN3010, University of Oslo)',
        methods: [
          'Semi-structured interviews',
          'Contextual observation',
          'Backcasting',
          'Transformative Design',
          'Practice-based methodology',
          'Low-fidelity prototyping',
          'Participatory workshops',
        ],
        tools: ['Arduino', '3D printing', 'Laser cutting', 'Figma', 'Miro'],
      },
      sections: [
        {
          type: 'text',
          heading: 'Context',
          body: [
            'Aurora Verksted is an Oslo-based workshop that puts people first, focusing on what individuals can do rather than what they cannot. Workers with a wide range of functional variations produce textiles, ceramics, knitwear, and artwork at their Haslum studio.',
            'The project began as an exploration of sustainability and local production. Through research visits and conversations with organisations such as ReLove and Nydalen Fabrikker, our focus evolved towards a more meaningful challenge: how might design enable fuller, more dignified participation in creative work for people with functional variations?',
          ],
        },
        {
          type: 'text',
          heading: 'Research & Discovery',
          body: [
            'We approached Aurora Verksted through a semi-structured interview at their Majorstuen shop, followed by an observation visit to the Haslum workshop. These sessions revealed how inclusive culture was already embedded in the organisation — several product designs had emerged directly from workers\' unexpected gestures, such as a worker who kept flattening clay spheres, inadvertently creating a new jewellery form.',
            'We also applied backcasting to map a future where functional variations are no longer barriers to full societal participation. This framework grounded our design direction in systemic, long-term thinking rather than quick fixes.',
            'A key ethical challenge was gaining informed consent from workers who have guardians. We resolved this by photographing processes and materials rather than individuals, preserving dignity while still capturing context.',
          ],
        },
        {
          type: 'insights',
          heading: 'Key Insights',
          items: [
            {
              title: 'Existing buttons are exclusionary',
              body: 'The knitting machines required both grip strength and precise motor control to activate. Several workers were unable to use them independently, limiting their participation.',
            },
            {
              title: 'Inclusion is already a core value',
              body: 'Aurora Verksted had already added a large button to one knitting machine as an ad-hoc fix — but the buttons wore out quickly and were expensive to replace.',
            },
            {
              title: 'Workers\' voices shape the designs',
              body: 'Designs at Aurora Verksted emerge from the workers themselves. Our tools needed to support, not override, this agency and spontaneity.',
            },
            {
              title: 'Cultural attitudes need addressing',
              body: 'Some customers had suggested that products made by people with functional variations should be priced lower. Research confirms a 26% reduction in employer interest for applicants who disclose disabilities (Ameri et al., 2018).',
            },
          ],
        },
        {
          type: 'text',
          heading: 'Design Process',
          body: [
            'We ran ideation workshops using brainstorming and mind-mapping, deliberately starting with "bad ideas" to lower barriers and encourage creative thinking. Early concepts included an AI clothing recommendation app and a storytelling presentation for workers — the latter we discovered already existed, and our conversation prompted Aurora Verksted to publish their "Håndlagde historier" (Handcrafted Stories) section on their website.',
            'Prototypes were developed iteratively, with each round presented back to Aurora Verksted\'s designer and director for feedback. We followed a practice-based, emergent methodology: the pattern roller, for instance, was not requested but arose naturally from observing workers in the ceramics and painting departments.',
          ],
        },
        {
          type: 'prototypes',
          heading: 'Prototypes',
          items: [
            {
              title: 'Sensitive Button',
              description:
                'A 3D-printed button requiring minimal force to activate, designed for workers with limited grip strength or reduced muscle control.',
              detail:
                'Based on the existing red buttons already in use at Aurora Verksted. The design is published open-source so any workshop with a 3D printer can produce them at low cost — dramatically cheaper than the commercial buttons they replace.',
            },
            {
              title: 'Large-Surface Button',
              description:
                'A wider, flatter button that requires less precision to press, enabling workers with reduced motor control to activate machinery independently.',
              detail:
                'Both button designs share a common internal switch mechanism and are fully open-source, allowing Aurora Verksted and others to iterate and adapt.',
            },
            {
              title: 'Proximity Sensor',
              description:
                'An Arduino-powered distance sensor that activates machinery when any object or body part comes within 20 cm — removing the need to press anything at all.',
              detail:
                'Housed in a laser-cut box branded with the Aurora Verksted logo. The box was intentionally designed to protect components while feeling like a legitimate workshop tool rather than a retrofit.',
            },
            {
              title: 'Pattern Roller',
              description:
                'A 3D-printed roller with interchangeable pattern inserts for pressing or painting designs onto ceramics, canvas, and fabric.',
              detail:
                'Also published open-source. While the initial material was too rigid for ceramic imprinting, a revised half-moon stamp design was developed that requires minimal force and precision — making pattern-making accessible to more workers.',
            },
          ],
        },
        {
          type: 'outcomes',
          heading: 'Outcomes',
          items: [
            'All 3D models and Arduino code published open-source for free reuse and adaptation',
            'Aurora Verksted added "Håndlagde historier" to their website following our conversations',
            'Proximity sensor loaned to Aurora Verksted for real-world testing in the workshop',
            'Created a foundation for future knowledge-sharing between designers and the workshop',
            'Demonstrated that inclusive tools can emerge from observation and genuine collaboration',
          ],
          reflection:
            'The most significant outcome of this project was not a single prototype but the collaborative platform itself. By working with Aurora Verksted as partners — not clients — we were able to respond to real, observed needs and contribute tools with genuine, lasting impact. Future work would establish a network for sharing inclusive workplace solutions across similar organisations.',
        },
      ],
    },
  },
  {
    id: '2',
    slug: 'sound-inclusive-learning',
    title: 'Sound for Inclusive Learning',
    subtitle: 'Master\'s Thesis — University of Oslo, 2023–2025',
    description:
      'Exploring how audio design and sound-based interaction can make digital learning environments more inclusive and accessible for diverse learners.',
    tags: ['Universal Design', 'Accessibility', 'WCAG', 'UX Research', 'Audio Design'],
    year: '2025',
    role: 'Lead Researcher & Designer',
    accentColor: '#EAE8F0',
    featured: true,
    caseStudy: {
      overview: {
        problem:
          'Digital learning platforms predominantly rely on visual communication, creating barriers for learners with visual impairments, learning differences, or those who simply learn better through sound. This thesis investigates how intentional audio design can improve accessibility and inclusivity in digital learning.',
        role: 'Lead Researcher & Designer — literature review, user research, prototype design, evaluation',
        timeline: 'August 2023 – June 2025, University of Oslo',
        methods: [
          'Literature review',
          'User interviews',
          'Participatory design',
          'Prototype evaluation',
          'WCAG compliance auditing',
          'Think-aloud testing',
        ],
        tools: ['Figma', 'Miro', 'Screen readers'],
      },
      sections: [
        {
          type: 'text',
          heading: 'Background',
          body: [
            'Inclusive digital learning is a growing field, yet most accessibility work focuses on visual adjustments — screen reader support, colour contrast, font sizing. Sound as a primary or complementary modality remains underexplored in learning design.',
            'This thesis asks: how can audio design principles be applied to digital learning environments to reduce barriers and create richer, more equitable learning experiences?',
          ],
        },
        {
          type: 'insights',
          heading: 'Research Findings',
          items: [
            {
              title: 'Sound as more than an alternative channel',
              body: 'Audio can reinforce comprehension, signal state changes, and create spatial orientation within an interface — not just replace visual content.',
            },
            {
              title: 'User preferences vary significantly',
              body: 'Learners have strong, diverse preferences around sound in learning contexts. Customisation and control are essential to an inclusive experience.',
            },
            {
              title: 'WCAG gaps in audio guidance',
              body: 'Current WCAG guidelines address captions and audio descriptions but provide limited guidance on proactive audio design for learning.',
            },
          ],
        },
        {
          type: 'outcomes',
          heading: 'Outcomes',
          items: [
            'Framework for evaluating audio accessibility in digital learning platforms',
            'Design guidelines for inclusive audio interaction in educational contexts',
            'Prototype demonstrating sound-enriched learning interface',
            'Contribution to universal design research at the University of Oslo',
          ],
          reflection:
            'This project deepened my conviction that inclusive design is not a checklist — it requires listening to users whose experiences are often invisible in mainstream product development. Sound, when designed with intention, can transform a learning environment from one that accommodates to one that genuinely includes.',
        },
      ],
    },
  },
  {
    id: '3',
    slug: 'dfo-participatory-design',
    title: 'Participatory Experimental Design Project',
    subtitle: 'DFO — IN5510, Autumn 2023',
    description:
      'Redesigning the DFO timesheet app through participatory workshops with public-sector employees, combining collaging, co-design, and contextmapping to surface real user needs.',
    tags: ['Participatory Design', 'Co-design', 'Contextmapping', 'Prototyping', 'Figma'],
    year: '2023',
    role: 'UX Designer & Researcher',
    accentColor: '#E8EDF0',
    featured: true,
    caseStudy: {
      overview: {
        problem:
          'DFO (Directorate of Public Administration and Financial Management) asked us to investigate usability problems in their timesheet app, used by public-sector employees across Norway. Through participatory workshops, we aimed to understand daily friction and co-design improvements directly with the people who use the system.',
        role: 'UX Designer & Researcher — workshop facilitation, contextmapping, prototyping',
        timeline: 'Autumn 2023 (IN5510, University of Oslo)',
        methods: [
          'Collaging',
          'Contextmapping',
          'Participatory Design (6 PD principles)',
          'Co-design workshops',
          'Paper prototyping',
          'Think-aloud evaluation',
        ],
        tools: ['Figma', 'Miro', 'Paper prototyping', 'Digital prototype'],
      },
      sections: [
        {
          type: 'text',
          heading: 'Context',
          body: [
            'DFO develops and maintains digital tools for Norwegian public-sector organisations. Their timesheet application — used to log and submit work hours — was flagged as a source of frustration by employees across departments. The system lacked visibility of accumulated hours, required manual submission steps, and offered no calendar overview.',
            'IN5510 (Participatory Experimental Design) provided a framework grounded in six core principles of participatory design: mutual learning, users as experts, situation-specific interventions, iterative prototyping, shared design language, and democratic participation. Our three-workshop series applied these principles directly with DFO employees.',
          ],
        },
        {
          type: 'visual',
          heading: 'Design Process Overview',
          componentKey: 'divergence-diagram',
          caption:
            'The double-diamond process we followed: a generative phase (Workshops 1 and 2) for diverging and exploring, followed by an evaluative phase (Workshop 3) for converging on a refined solution.',
        },
        {
          type: 'visual',
          heading: 'Workshop Timeline',
          componentKey: 'workshop-timeline',
          caption: 'Three workshops over four weeks — from initial collaging to prototype evaluation.',
        },
        {
          type: 'text',
          heading: 'Research & Discovery',
          body: [
            'Workshop 1 (18 Oct) used collaging as a low-barrier entry point. Participants assembled images representing their relationship with work, time, and digital tools. This surfaced unexpected themes: a sense of disconnection from the systems they used, anxiety around forgotten submissions, and a desire for a clearer overview of their own working patterns.',
            'Contextual probes — short diary-style tasks completed between workshops — gave us insight into daily routines. Participants photographed moments when they thought about work hours but could not log them, revealing how fragmented the current experience was.',
          ],
        },
        {
          type: 'insights',
          heading: 'Key Insights',
          items: [
            {
              title: 'No visibility of accumulated hours',
              body: 'Employees had no way to see their total hours for the month without manually counting logged entries. This caused stress ahead of submission deadlines.',
            },
            {
              title: 'Submission was easy to forget',
              body: 'Hours were logged but not automatically submitted, and there was no reminder system. Several participants described routinely missing weekly submission windows.',
            },
            {
              title: 'Calendar view was missing',
              body: 'Users wanted to see their working days in a calendar format — not just a list — to spot gaps, verify patterns, and plan ahead.',
            },
            {
              title: 'Contract switching was cumbersome',
              body: 'Employees on multiple contracts had to navigate several steps to switch context, adding friction to an already repetitive daily task.',
            },
          ],
        },
        {
          type: 'text',
          heading: 'Co-design & Prototyping',
          body: [
            'Workshop 2 (5 Nov) moved into ideation and paper prototyping. Participants sketched solutions to the pain points identified in Workshop 1, then presented their sketches to the group. Themes converged quickly: a start screen with shortcuts, a calendar view of logged hours, and an alert system for unsubmitted weeks.',
            'Between workshops 2 and 3, we translated the paper prototypes into a digital Figma prototype. We prioritised the three most-requested features: a personalised start screen with quick-access tiles, a monthly calendar showing logged days, and a streamlined hour-logging pop-up accessible directly from the calendar.',
          ],
        },
        {
          type: 'prototypes',
          heading: 'Prototype Features',
          items: [
            {
              title: 'Start screen with shortcuts',
              description:
                'A personalised home screen showing the current date, today\'s logged hours, and quick-access tiles for the most-used functions (contract, weekly hours, leave).',
              detail:
                'An alert banner at the top of the screen flags unsubmitted hours — prominently visible but not disruptive, so users are reminded before a deadline rather than after.',
            },
            {
              title: 'Calendar overview',
              description:
                'A monthly calendar view replacing the previous list-only log, with a small bar indicator on each day showing hours logged. Provides instant overview of the working month.',
              detail:
                'Users can tap any day to see or edit entries, and the month total is shown below the grid — directly answering the most common complaint.',
            },
            {
              title: 'Streamlined hour-logging pop-up',
              description:
                'A focused logging screen with date, project/contract selector, and a start–end time picker. Minimal steps from calendar tap to saved entry.',
              detail:
                'An optional comment field supports edge cases without cluttering the default flow. The design reduces the average logging interaction to three taps.',
            },
            {
              title: 'Automatic submission reminders',
              description:
                'System-generated alerts when hours have not been submitted for a rolling two-week window, surfaced on the start screen and as a push notification.',
            },
          ],
        },
        {
          type: 'visual',
          heading: 'Prototype Screens',
          componentKey: 'dfo-wireframes',
          caption:
            'Three key screens from the Figma prototype: the personalised start screen, calendar overview, and hour-logging interaction.',
        },
        {
          type: 'outcomes',
          heading: 'Outcomes',
          items: [
            'Digital Figma prototype covering the three highest-priority user needs',
            'Rich insight base from collaging, contextual probes, and think-aloud sessions',
            'Validated design direction directly with DFO employees across three workshops',
            'Demonstrated how participatory methods surface needs that surveys miss',
          ],
          reflection:
            'This project showed me how much is lost when design happens in isolation from users. The collaging exercise alone surfaced emotional dimensions of the timesheet problem — stress, disconnection, loss of control — that would never have appeared in a conventional user survey. Participatory design is slower and messier than traditional UX, but the designs that emerge from it carry a kind of legitimacy that no amount of iteration in Figma can replicate.',
        },
      ],
    },
  },
  {
    id: '4',
    slug: 'dorstokkmila',
    title: 'Fibbly — Designing Against Loneliness',
    subtitle: 'Dørstokkmila — IN1060, Spring 2021',
    description:
      'A participatory design project exploring how a tangible, screen-free artifact could lower the social risk of reaching out — helping home-dwelling gamers reconnect with friends without fear of rejection.',
    tags: ['Participatory Design', 'Tangible Interaction', 'Arduino', 'Physical Prototyping', 'User Research'],
    year: '2021',
    role: 'UX Designer & Maker',
    accentColor: '#EBF0EB',
    featured: true,
    caseStudy: {
      overview: {
        problem:
          'Young men who spend most of their leisure time gaming often feel isolated, yet the digital social spaces they inhabit are not fulfilling enough long-term. The challenge was to design something that motivates them to initiate real-world social contact — without a screen, and without prescribing which activity they should do.',
        role: 'UX Designer & Maker — interviews, workshops, prototyping, user observation',
        timeline: 'Spring 2021 (IN1060, University of Oslo)',
        methods: [
          'Semi-structured interviews',
          'Affinity Diagram',
          'Participatory Design (DMB)',
          'Co-design workshops',
          'Self-reporting observation',
          'Participatory observation',
          'Roleplay evaluation',
        ],
        tools: ['Arduino', 'Paper prototyping', 'MetroRetro', 'Figma', 'Miro'],
      },
      sections: [
        {
          type: 'text',
          heading: 'Context',
          body: [
            'During the COVID-19 pandemic, social isolation became an acute concern — particularly for young men who already tended to center their social lives around digital gaming. While online play provided connection of a kind, research and our own interviews consistently showed it was not enough: users wanted more physical, spontaneous social contact but lacked the motivation or opportunity to initiate it.',
            'IN1060 (Use-oriented System Design) challenged us to design for a real user group using Design Med Brukere (DMB) — a participatory framework rooted in mutual learning, co-creation, and iterative prototyping. We identified three guiding principles for our process: openness (never closing the possibility space too early), flexibility (prioritising a correct process over a predetermined result), and honesty (being willing to admit and correct mistakes).',
          ],
        },
        {
          type: 'text',
          heading: 'Research & Discovery',
          body: [
            'We conducted three semi-structured interviews with young male gamers who lived at home. Rather than asking "are you lonely?", we framed questions around activity: "when do you feel most isolated?" and "what does your ideal day look like?" This approach surfaced more honest, nuanced responses.',
            'After each interview we used MetroRetro for affinity mapping — grouping observations inductively into clusters. Three patterns emerged strongly across all users: they spent far more time in front of screens than they wanted to, they gamed primarily as a form of escapism, and the threshold for online socialising was so low that it crowded out more meaningful, physically present contact.',
            'An initial workshop invited our primary user to react to our affinity diagram and throw out ideas freely. We pursued concepts around fitness and outdoor activity — but a subsequent workshop and deeper analysis revealed this was a design bias we had introduced ourselves. The user did not need a new activity; he needed a reason to reach out.',
          ],
        },
        {
          type: 'insights',
          heading: 'Key Insights',
          items: [
            {
              title: 'Screen time exceeded what users wanted',
              body: 'All three interviewees acknowledged spending more time in front of a PC than felt healthy, and expressed a genuine desire to break the pattern — but lacked the trigger to do so.',
            },
            {
              title: 'Gaming served as escapism, not connection',
              body: '"What I like about gaming is that you can experience things you can\'t in real life." Online social time filled a need but left a deeper need for in-person contact unmet over time.',
            },
            {
              title: 'Low threshold, low reward',
              body: 'Starting an online session required almost no effort, which made it easy to default to. But users reflected that this ease came at the cost of the more rewarding physical social contact they were missing.',
            },
            {
              title: 'Social rejection was a barrier to reaching out',
              body: 'The real friction was not knowing whether a friend was also in the mood to hang out. Sending a message carried the risk of awkwardness or rejection — a barrier that kept users passive.',
            },
          ],
        },
        {
          type: 'visual',
          heading: 'Design Process',
          componentKey: 'design-iterations',
          caption:
            'Three iterations across the semester — from initial discovery through concept generation to a tested physical prototype.',
        },
        {
          type: 'text',
          heading: 'From Training Apps to Fibbly',
          body: [
            'Our first round of prototyping produced six concepts: an outdoor treasure hunt, a HIIT training challenge, a sightseeing assistant, a card-based exercise game, a training competition, and a "challenge me" concept. A workshop with our user to evaluate these revealed a critical mistake: we had steered the design toward fitness because we ourselves were interested in gamification, not because the user needed it.',
            'The pivot led to two second-iteration concepts. Skattejakt was a geocaching-based outdoor game; it was engaging but still imposed an activity. Fibbly was different: a small object the user picks up when bored or wanting company, which signals anonymously to friends who have the same device. If a friend has also activated theirs within the last hour, both find out. If no one has, no one knows you reached out. No rejection risk.',
            'After a supervisor evaluation and observation visit to our user\'s home — where we noticed he unconsciously fidgeted with objects on his desk — we refined Fibbly\'s form and interaction. The final prototype was a slime-filled balloon with an Arduino core, an LED, a shake sensor, and a vibration motor, inspired by a crystal ball from Final Fantasy (a game the user displayed prominently on his desk).',
          ],
        },
        {
          type: 'prototypes',
          heading: 'Prototype Concepts',
          items: [
            {
              title: 'Skattejakt — Outdoor Treasure Hunt',
              description:
                'A geocaching-based game where users hide a sensor outdoors and compete with friends to find it using GPS tracking. Addressed the need to get outside and spend time with others.',
              detail:
                'Formconcept: pirate (map, compass, monocular). Discarded in favour of Fibbly because it still prescribed the activity rather than lowering the threshold for contact itself.',
            },
            {
              title: 'Fibbly — Tangible Social Connector',
              description:
                'A soft, shakeable ball that lets users signal anonymously to friends that they want to hang out. Only if a friend also activates their Fibbly within the same hour does either party find out — eliminating the risk of social rejection.',
              detail:
                'Final form: a slime-filled balloon (transparent, glowing) over an Arduino with shake sensor, LED (blue = signal sent, green = friend is available), and vibration motor. Rests on a minimal geometric wooden stand. Inspired by the Final Fantasy crystal ball found on our user\'s desk.',
            },
          ],
        },
        {
          type: 'outcomes',
          heading: 'Outcomes',
          items: [
            'Working physical prototype with shake-activated LED and vibration feedback',
            'Positive summative evaluation: form, haptic feel, and interaction concept all well-received',
            'User identified meaningful edge cases (e.g. the emotional risk of receiving no response) that would shape future iterations',
            'Process validated that co-design with users surfaces needs surveys cannot — the real problem was social risk, not the lack of an activity',
          ],
          reflection:
            'Fibbly taught me that good design often means stripping away your own assumptions before you can see the user\'s actual problem. We spent weeks designing around exercise before we admitted we had been leading the user the whole time. The most valuable output of this project was not the prototype but the process shift — learning to sit with an open problem long enough to find the real question.',
        },
      ],
    },
  },
  {
    id: '5',
    slug: 'app-development-bachelor',
    title: 'Collaborative App Development',
    subtitle: 'Bachelor\'s Project — University of Oslo, 2020–2023',
    description:
      'Designing and building a mobile app in an interdisciplinary team using agile development, user-centred design, and iterative prototyping.',
    tags: ['Mobile Design', 'Agile', 'User Testing', 'Kotlin', 'Figma'],
    year: '2023',
    role: 'UX Designer & Developer',
    accentColor: '#F0EAE8',
    featured: false,
    caseStudy: {
      overview: {
        problem:
          'The project brief required a student team to identify a real-world problem and design a working mobile application from concept through to a tested prototype, applying user-centred design methods throughout.',
        role: 'UX Designer & Developer — research, design, Kotlin development',
        timeline: 'Bachelor\'s degree, University of Oslo, 2020–2023',
        methods: [
          'User interviews',
          'Persona development',
          'User journey mapping',
          'Wireframing',
          'Usability testing',
          'Agile/Scrum',
        ],
        tools: ['Figma', 'Miro', 'Kotlin', 'Android Studio', 'SQL'],
      },
      sections: [
        {
          type: 'text',
          heading: 'Process',
          body: [
            'Working in an interdisciplinary team, we applied an agile development framework — running two-week sprints from discovery through delivery. Each sprint included user research, design iteration, and development, with regular retrospectives to adjust our process.',
            'I was responsible for UX design and contributed to the Kotlin front-end implementation, bridging design and engineering throughout the project.',
          ],
        },
        {
          type: 'outcomes',
          heading: 'Outcomes',
          items: [
            'Delivered a fully functional Android application tested with real users',
            'Strengthened cross-disciplinary collaboration between designers and developers',
            'Applied and documented a full UX process from research to release',
            'Developed proficiency in Kotlin, Android Studio, and agile workflows',
          ],
          reflection:
            'This project was formative in showing me how design and engineering reinforce each other when teams communicate well. Working in an interdisciplinary group — where I was both a designer and a developer — gave me an appreciation for the full product lifecycle that continues to inform how I work.',
        },
      ],
    },
  },
]

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured)

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)
