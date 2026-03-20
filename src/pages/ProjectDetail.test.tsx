import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import ProjectDetail from './ProjectDetail'
import Projects from './Projects'
import { projects } from '../data/projects'

function renderDetail(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/projects/${slug}`]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('ProjectDetail page', () => {
  const auroraProject = projects.find((p) => p.slug === 'aurora-verksted')!

  it('renders the project title as a heading', () => {
    renderDetail('aurora-verksted')
    expect(
      screen.getByRole('heading', { name: auroraProject.title, level: 1 }),
    ).toBeInTheDocument()
  })

  it('renders the project subtitle', () => {
    renderDetail('aurora-verksted')
    expect(screen.getByText(auroraProject.subtitle)).toBeInTheDocument()
  })

  it('renders the project description', () => {
    renderDetail('aurora-verksted')
    expect(screen.getByText(auroraProject.description)).toBeInTheDocument()
  })

  it('renders the back to projects link', () => {
    renderDetail('aurora-verksted')
    const backLinks = screen.getAllByRole('link', { name: /all projects/i })
    expect(backLinks.length).toBeGreaterThan(0)
    expect(backLinks[0]).toHaveAttribute('href', '/projects')
  })

  it('renders the overview section with the challenge', () => {
    renderDetail('aurora-verksted')
    expect(screen.getByText(auroraProject.caseStudy.overview.problem)).toBeInTheDocument()
  })

  it('renders all prototype titles', () => {
    renderDetail('aurora-verksted')
    const prototypes = auroraProject.caseStudy.sections.find(
      (s) => s.type === 'prototypes',
    ) as { type: 'prototypes'; items: { title: string; description: string }[] }
    if (prototypes) {
      for (const item of prototypes.items) {
        expect(screen.getByText(item.title)).toBeInTheDocument()
      }
    }
  })

  it('redirects to /projects for an unknown slug', () => {
    renderDetail('does-not-exist')
    expect(
      screen.getByRole('heading', { name: /^projects$/i, level: 1 }),
    ).toBeInTheDocument()
  })

  it('renders the sound-for-inclusive-learning project', () => {
    renderDetail('sound-inclusive-learning')
    const project = projects.find((p) => p.slug === 'sound-inclusive-learning')!
    expect(screen.getByRole('heading', { name: project.title, level: 1 })).toBeInTheDocument()
  })

  it('renders the dfo-participatory-design project title', () => {
    renderDetail('dfo-participatory-design')
    const project = projects.find((p) => p.slug === 'dfo-participatory-design')!
    expect(screen.getByRole('heading', { name: project.title, level: 1 })).toBeInTheDocument()
  })

  it('renders the dfo project overview problem', () => {
    renderDetail('dfo-participatory-design')
    const project = projects.find((p) => p.slug === 'dfo-participatory-design')!
    expect(screen.getByText(project.caseStudy.overview.problem)).toBeInTheDocument()
  })

  it('renders the workshop timeline diagram section heading', () => {
    renderDetail('dfo-participatory-design')
    expect(screen.getByRole('heading', { name: /workshop timeline/i, level: 2 })).toBeInTheDocument()
  })

  it('renders the dfo prototype screens heading', () => {
    renderDetail('dfo-participatory-design')
    expect(screen.getByRole('heading', { name: /prototype screens/i, level: 2 })).toBeInTheDocument()
  })

  it('renders the dorstokkmila project title', () => {
    renderDetail('dorstokkmila')
    const project = projects.find((p) => p.slug === 'dorstokkmila')!
    expect(screen.getByRole('heading', { name: project.title, level: 1 })).toBeInTheDocument()
  })

  it('renders the dorstokkmila design process section', () => {
    renderDetail('dorstokkmila')
    expect(screen.getByRole('heading', { name: /design process/i, level: 2 })).toBeInTheDocument()
  })

  it('renders the dorstokkmila key insights', () => {
    renderDetail('dorstokkmila')
    expect(screen.getByRole('heading', { name: /key insights/i, level: 2 })).toBeInTheDocument()
  })
})
