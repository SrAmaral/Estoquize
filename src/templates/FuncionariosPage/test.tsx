import { render, screen } from '@testing-library/react'

import FuncionariosPage from '.'

describe('<FuncionariosPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<FuncionariosPage />)

    expect(screen.getByRole('heading', { name: /FuncionariosPage/i })).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })
})
