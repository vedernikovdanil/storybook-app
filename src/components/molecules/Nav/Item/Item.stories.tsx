import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Nav from '..';
import Item from '.';

const meta: Meta<typeof Item> = {
  component: Item,
  decorators: [(story) => <Nav>{story()}</Nav>],
};

export default meta;

export const Default: StoryObj<typeof Item> = {
  render: (args) => <Item {...args} />,

  args: {
    children: 'Item',
  },
};
