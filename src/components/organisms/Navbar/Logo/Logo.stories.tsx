import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Navbar from '../';

const meta: Meta<typeof Navbar.Logo> = {
  component: Navbar.Logo,
};

export default meta;

export const Logo: StoryObj<typeof Navbar.Logo> = {
  render: (args) => <Navbar.Logo {...args} />,

  args: {
    children: 'Logo',
  },
};
