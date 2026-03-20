import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  )
}

describe('Footer', () => {
  it('renders the designer name', () => {
    renderFooter()
    expect(screen.getByText('Martha Hoel Løken')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    renderFooter()
    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^projects$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^contact$/i })).toBeInTheDocument()
  })

  it('renders a copyright notice with the current year', () => {
    renderFooter()
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    renderFooter()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
