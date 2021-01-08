import { Story, Meta } from '@storybook/react/types-6-0'
import Heading from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Heading {...args} />

Default.args = {
  children: 'Heading'
}
