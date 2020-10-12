import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Icon, IconProps } from './Icon'

export default {
  title: 'atoms/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'large',
  name: 'star'
}
