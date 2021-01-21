import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => (
  <div style={{ height: '100hv', width: '100%' }}>
    <Menu {...args} />
  </div>
)
