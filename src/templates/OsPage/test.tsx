import { render, screen } from '@testing-library/react'

import OsPage from '.'

describe('<OsPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<OsPage />)

    expect(screen.getByRole('heading', { name: /OsPage/i })).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })
})
