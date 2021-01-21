import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the user info', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/adam smith/i)).toBeInTheDocument()
    expect(screen.getByText(/administração/i)).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu links', () => {
    renderWithTheme(<Menu />)

    expect(screen.getAllByRole('img')).toHaveLength(6)
    expect(screen.getAllByRole('link')).toHaveLength(6)

    //expect(container.firstChild).toMatchSnapshot()
  })
})
