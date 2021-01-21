import { render, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helper'

import EstoqueMenu from '.'

describe('<EstoqueMenu />', () => {
  it('should render all buttons', () => {
    renderWithTheme(<EstoqueMenu />)

    expect(screen.getAllByRole('button')).toHaveLength(3)

    //expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the style selected produtos', () => {
    renderWithTheme(<EstoqueMenu />)

    expect(screen.getByRole('button', { name: /produtos/i })).toHaveStyle({
      background: theme.colors.blue
    })

    //expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the style selected saida', () => {
    renderWithTheme(<EstoqueMenu selected="saida" />)

    expect(screen.getByRole('button', { name: /saida/i })).toHaveStyle({
      background: theme.colors.blue
    })

    //expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the style selected entrada', () => {
    renderWithTheme(<EstoqueMenu selected="entrada" />)

    expect(screen.getByRole('button', { name: /entrada/i })).toHaveStyle({
      background: theme.colors.blue
    })

    //expect(container.firstChild).toMatchSnapshot()
  })
})
