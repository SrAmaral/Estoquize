import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Search from '.'

describe('<Search />', () => {
  it('should render the image ', () => {
    renderWithTheme(<Search />)

    screen.getByRole('img', { name: /lupa de pesquisa/i })

    //expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the input search ', () => {
    renderWithTheme(<Search />)

    screen.getByRole('searchbox')

    //expect(container.firstChild).toMatchSnapshot()
  })
})
