import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helper'

import CheckBox from '.'

describe('<CheckBox />', () => {
  it('should render with label', () => {
    renderWithTheme(<CheckBox label="checkbox" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox/i)).toHaveAttribute('for', 'check')

    //expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    renderWithTheme(<CheckBox />)

    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <CheckBox labelColor="title" label="checkbox" labelFor="check" />
    )

    expect(screen.getByText(/checkbox/i)).toHaveStyle({
      color: `${theme.colors.title}`
    })
    //expect(container.firstChild).toMatchSnapshot()
  })

  it('should dispatch onCheck whe status change', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<CheckBox label="Checkbox" onCheck={onCheck} />)
    //expect(container.firstChild).toMatchSnapshot()

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck whe status change', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<CheckBox label="Checkbox" onCheck={onCheck} isChecked />)
    //expect(container.firstChild).toMatchSnapshot()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should dispatch onCheck whe status change', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<CheckBox label="Checkbox" labelFor="checkbox" />)
    //expect(container.firstChild).toMatchSnapshot()

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
  })
})
