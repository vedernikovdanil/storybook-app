import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Navbar from '../Navbar';

export default {
  component: Navbar.Logo,
} as Meta<typeof Navbar.Logo>;

export const Logo: StoryObj<typeof Navbar.Logo> = {
  render: (args) => <Navbar.Logo {...args} />,

  args: {
    children: 'Logo',
  },
};
