import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Home from './Home'
import { getFeaturedProjects } from '../data/projects'

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )
}

describe('Home page', () => {
  it('renders the designer name in the heading', () => {
    renderHome()
    expect(
      screen.getByRole('heading', { name: /martha hoel løken/i, level: 1 }),
    ).toBeInTheDocument()
  })

  it('renders the UX & Interaction Designer tagline', () => {
    renderHome()
    expect(screen.getByText(/UX & Interaction Designer/i)).toBeInTheDocument()
  })

  it('renders a link to View my work', () => {
    renderHome()
    expect(screen.getByRole('link', { name: /view my work/i })).toHaveAttribute(
      'href',
      '/projects',
    )
  })

  it('renders a link to Get in touch', () => {
    renderHome()
    expect(screen.getByRole('link', { name: /get in touch/i })).toHaveAttribute(
      'href',
      '/contact',
    )
  })

  it('renders the About me section', () => {
    renderHome()
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument()
  })

  it('renders featured projects', () => {
    renderHome()
    const featured = getFeaturedProjects()
    for (const project of featured) {
      expect(screen.getByText(project.title)).toBeInTheDocument()
    }
  })

  it('renders the Selected work section heading', () => {
    renderHome()
    expect(screen.getByRole('heading', { name: /selected work/i })).toBeInTheDocument()
  })

  it('renders a link to all projects', () => {
    renderHome()
    const allLinks = screen.getAllByRole('link', { name: /all projects/i })
    expect(allLinks.length).toBeGreaterThan(0)
    expect(allLinks[0]).toHaveAttribute('href', '/projects')
  })
})
