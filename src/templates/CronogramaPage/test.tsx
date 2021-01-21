import { render, screen } from '@testing-library/react'

import CronogramaPage from '.'

describe('<CronogramaPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<CronogramaPage />)

    expect(screen.getByRole('heading', { name: /CronogramaPage/i })).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })
})
