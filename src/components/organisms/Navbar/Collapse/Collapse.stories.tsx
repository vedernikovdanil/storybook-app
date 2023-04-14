import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Navbar from '../';
import Nav from '@molecules/Nav';
import { Default as NavStory } from '@molecules/Nav/Nav.stories';

const meta: Meta<typeof Navbar.Collapse> = {
  component: Navbar.Collapse,
  decorators: [(story) => <Navbar>{story()}</Navbar>],
};

export default meta;

export const Collapse: StoryObj<typeof Navbar.Collapse> = {
  render: (args) => <Navbar.Collapse {...args} />,

  args: {
    children: <Nav {...NavStory.args} />,
  },
};
