import { Story, Meta } from '@storybook/react/types-6-0'
import EstoqueMenu, { EstoqueMenuProps } from '.'

export default {
  title: 'EstoqueMenu',
  component: EstoqueMenu
} as Meta

export const Default: Story<EstoqueMenuProps> = (args) => (
  <EstoqueMenu {...args} />
)
