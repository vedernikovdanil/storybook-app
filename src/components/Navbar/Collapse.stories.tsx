import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Navbar from './Navbar';
import { Default as NavStory } from '../Nav/Nav.stories';

export default {
  component: Navbar.Collapse,
  decorators: [(story) => <Navbar>{story()}</Navbar>],
} as ComponentMeta<typeof Navbar.Collapse>;

export const Collapse: ComponentStory<typeof Navbar.Collapse> = (args) => (
  <Navbar.Collapse {...args} />
);
Collapse.args = {
  children: <NavStory {...NavStory.args} />,
};
