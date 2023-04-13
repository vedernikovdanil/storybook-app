import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Navbar from '../Navbar';

export default {
  component: Navbar.Toggler,
  decorators: [(story) => <Navbar>{story()}</Navbar>],
} as Meta<typeof Navbar.Toggler>;

export const Toggler: StoryObj<typeof Navbar.Toggler> = {
  render: (args) => <Navbar.Toggler {...args} />,
};
