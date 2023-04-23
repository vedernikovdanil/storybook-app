import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Nav from '@molecules/Nav';
import Navbar from '..';
import Collapse from '.';
import { Default as NavStory } from '@molecules/Nav/Nav.stories';

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  decorators: [(story) => <Navbar>{story()}</Navbar>],
};

export default meta;

export const Default: StoryObj<typeof Collapse> = {
  render: (args) => <Collapse {...args} />,
  args: {
    children: <Nav {...NavStory.args} />,
  },
};
