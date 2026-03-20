import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from './App'

function renderApp(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App — layout', () => {
  it('always renders navigation', () => {
    renderApp()
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })

  it('always renders footer', () => {
    renderApp()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('App — routing', () => {
  it('renders Home on /', () => {
    renderApp('/')
    expect(
      screen.getByRole('heading', { name: /martha hoel løken/i, level: 1 }),
    ).toBeInTheDocument()
  })

  it('renders Projects on /projects', () => {
    renderApp('/projects')
    expect(
      screen.getByRole('heading', { name: /^projects$/i, level: 1 }),
    ).toBeInTheDocument()
  })

  it('renders Contact on /contact', () => {
    renderApp('/contact')
    expect(
      screen.getByRole('heading', { name: /^contact$/i, level: 1 }),
    ).toBeInTheDocument()
  })

  it('renders ProjectDetail on /projects/:slug', () => {
    renderApp('/projects/aurora-verksted')
    expect(
      screen.getByRole('heading', { name: /inclusive workplace tools/i, level: 1 }),
    ).toBeInTheDocument()
  })

  it('falls back to Home for unknown routes', () => {
    renderApp('/not-a-real-page')
    expect(
      screen.getByRole('heading', { name: /martha hoel løken/i, level: 1 }),
    ).toBeInTheDocument()
  })
})
