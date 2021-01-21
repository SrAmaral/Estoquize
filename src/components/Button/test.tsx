import { screen } from '@testing-library/react'

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'
import { renderWithTheme } from 'utils/tests/helper'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)
  })
})
