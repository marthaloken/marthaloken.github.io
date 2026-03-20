import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'

function renderContact() {
  return render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>,
  )
}

describe('Contact page', () => {
  it('renders the Contact heading', () => {
    renderContact()
    expect(
      screen.getByRole('heading', { name: /^contact$/i, level: 1 }),
    ).toBeInTheDocument()
  })

  it('renders the email address link', () => {
    renderContact()
    const link = screen.getByRole('link', { name: /martha@loken\.biz/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'mailto:martha@loken.biz')
  })

  it('renders the LinkedIn link', () => {
    renderContact()
    const link = screen.getByRole('link', { name: /martha hoel løken/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/martha-hoel-loken')
  })

  it('renders the location', () => {
    renderContact()
    expect(screen.getByText(/oslo, norway/i)).toBeInTheDocument()
  })
})
