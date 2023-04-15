import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Navbar from '..';

const meta: Meta<typeof Navbar.Darkmode> = {
  component: Navbar.Darkmode,
};

export default meta;

export const Darkmode: StoryObj<typeof Navbar.Darkmode> = {
  render: (args) => <Navbar.Darkmode {...args} />,
};
