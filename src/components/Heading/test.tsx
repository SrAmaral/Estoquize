import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'
import theme from 'styles/theme'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading with default size', () => {
    renderWithTheme(<Heading>Heading</Heading>)

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      'font-size': `${theme.font.sizes.xlarge}`,
      'font-weight': `${theme.font.bold}`
    })
  })

  it('should render the heading with small size', () => {
    renderWithTheme(<Heading size="small">Heading</Heading>)

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      'font-size': `${theme.font.sizes.large}`,
      'font-weight': `${theme.font.normal}`
    })
  })

  it('should render the heading with large size', () => {
    renderWithTheme(<Heading size="large">Heading</Heading>)

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      'font-size': `3.6rem`,
      'font-weight': `${theme.font.bold}`
    })
  })
})
