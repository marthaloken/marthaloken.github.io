import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Navigation from './Navigation'

function renderNav(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Navigation />
    </MemoryRouter>,
  )
}

describe('Navigation', () => {
  it('renders the logo', () => {
    renderNav()
    expect(screen.getByRole('link', { name: /martha hoel løken/i })).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    renderNav()
    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^projects$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^contact$/i })).toBeInTheDocument()
  })

  it('has correct href attributes', () => {
    renderNav()
    expect(screen.getByRole('link', { name: /^home$/i })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /^projects$/i })).toHaveAttribute('href', '/projects')
    expect(screen.getByRole('link', { name: /^contact$/i })).toHaveAttribute('href', '/contact')
  })

  it('marks the home link as active on /', () => {
    renderNav('/')
    const homeLink = screen.getByRole('link', { name: /^home$/i })
    expect(homeLink.className).toMatch(/active/)
  })

  it('marks the projects link as active on /projects', () => {
    renderNav('/projects')
    const projectsLink = screen.getByRole('link', { name: /^projects$/i })
    expect(projectsLink.className).toMatch(/active/)
  })

  it('marks the contact link as active on /contact', () => {
    renderNav('/contact')
    const contactLink = screen.getByRole('link', { name: /^contact$/i })
    expect(contactLink.className).toMatch(/active/)
  })

  it('renders a landmark nav element', () => {
    renderNav()
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })
})
