import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Nav from '../';

const meta: Meta<typeof Nav.Item> = {
  component: Nav.Item,
  decorators: [(story) => <ul>{story()}</ul>],
};

export default meta;

export const Item: StoryObj<typeof Nav.Item> = {
  render: (args) => <Nav.Item {...args} />,

  args: {
    children: 'Item',
  },
};
