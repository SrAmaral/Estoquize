import { render, screen } from '@testing-library/react'

import ClientesPage from '.'

describe('<ClientesPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<ClientesPage />)

    expect(screen.getByRole('heading', { name: /ClientesPage/i })).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })
})
