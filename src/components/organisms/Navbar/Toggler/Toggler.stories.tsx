import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Navbar from '../';

const meta: Meta<typeof Navbar.Toggler> = {
  component: Navbar.Toggler,
};

export default meta;

export const Toggler: StoryObj<typeof Navbar.Toggler> = {
  render: (args) => <Navbar.Toggler {...args} />,
};
