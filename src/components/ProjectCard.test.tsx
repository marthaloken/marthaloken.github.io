import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const project = projects[0]

function renderCard() {
  return render(
    <MemoryRouter>
      <ProjectCard project={project} />
    </MemoryRouter>,
  )
}

describe('ProjectCard', () => {
  it('renders project title', () => {
    renderCard()
    expect(screen.getByText(project.title)).toBeInTheDocument()
  })

  it('renders project subtitle', () => {
    renderCard()
    expect(screen.getByText(project.subtitle)).toBeInTheDocument()
  })

  it('renders project description', () => {
    renderCard()
    expect(screen.getByText(project.description)).toBeInTheDocument()
  })

  it('renders all project tags', () => {
    renderCard()
    for (const tag of project.tags) {
      expect(screen.getByText(tag)).toBeInTheDocument()
    }
  })

  it('links to the correct project detail page', () => {
    renderCard()
    const link = screen.getByRole('link', { name: /view case study/i })
    expect(link).toHaveAttribute('href', `/projects/${project.slug}`)
  })

  it('renders the year', () => {
    renderCard()
    expect(screen.getByText(project.year)).toBeInTheDocument()
  })

  it('renders the role', () => {
    renderCard()
    expect(screen.getByText(project.role)).toBeInTheDocument()
  })
})
