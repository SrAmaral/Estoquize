import { Story, Meta } from '@storybook/react/types-6-0'
import { Email, Lock } from '@styled-icons/material-outlined'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    iconPosition: 'left',
    initialValue: '',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField
      placeholder="exemple@exemple.com"
      label="email"
      icon={<Email />}
      {...args}
    />
    <TextField
      placeholder="******"
      label="password"
      icon={<Lock />}
      type="password"
      {...args}
    />
  </div>
)

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  error: 'Ops...something is wrong'
}
