import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Nav from '../Nav';

export default {
  component: Nav.Item,
  decorators: [(story) => <ul>{story()}</ul>],
} as Meta<typeof Nav.Item>;

export const Item: StoryObj<typeof Nav.Item> = {
  render: (args) => <Nav.Item {...args} />,

  args: {
    children: 'Item',
  },
};
