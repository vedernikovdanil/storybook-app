import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Navbar from '../Navbar';
import Nav from '../../../molecules/Nav';
import { Default as NavStory } from '../../../molecules/Nav/Nav.stories';

export default {
  component: Navbar.Collapse,
  decorators: [(story) => <Navbar>{story()}</Navbar>],
} as Meta<typeof Navbar.Collapse>;

export const Collapse: StoryObj<typeof Navbar.Collapse> = {
  render: (args) => <Navbar.Collapse {...args} />,

  args: {
    children: <Nav {...NavStory.args} />,
  },
};
