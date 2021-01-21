import { Story, Meta } from '@storybook/react/types-6-0'
import List, { ListProps } from '.'

export default {
  title: 'List',
  component: List
} as Meta

export const Default: Story<ListProps> = (args) => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <List {...args} />
  </div>
)

Default.args = {
  hasName: true,
  hasQuantity: true,
  hasData: true
}
