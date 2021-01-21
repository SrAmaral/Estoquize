import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from 'styles/theme'

addDecorator(withNextRouter())

export const parameters = {
  backgrounds: {
    default: 'grey',
    values: [
      {
        name: 'grey',
        value: theme.colors.background
      },
      {
        name: 'white',
        value: theme.colors.white
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
