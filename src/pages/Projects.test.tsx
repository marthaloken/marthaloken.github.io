import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Projects from './Projects'
import { projects } from '../data/projects'

function renderProjects() {
  return render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>,
  )
}

describe('Projects page', () => {
  it('renders the Projects heading', () => {
    renderProjects()
    expect(
      screen.getByRole('heading', { name: /^projects$/i, level: 1 }),
    ).toBeInTheDocument()
  })

  it('renders all projects', () => {
    renderProjects()
    for (const project of projects) {
      expect(screen.getByText(project.title)).toBeInTheDocument()
    }
  })

  it('renders links to all project detail pages', () => {
    renderProjects()
    for (const project of projects) {
      const link = screen.getByRole('link', {
        name: new RegExp(`view case study: ${project.title}`, 'i'),
      })
      expect(link).toHaveAttribute('href', `/projects/${project.slug}`)
    }
  })

  it('renders all project tags', () => {
    renderProjects()
    for (const project of projects) {
      for (const tag of project.tags) {
        expect(screen.getAllByText(tag).length).toBeGreaterThan(0)
      }
    }
  })
})
