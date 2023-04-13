import React from 'react';
import { type StoryFn, type Meta } from '@storybook/react';
import Navbar from '../Navbar';

export default {
  component: Navbar.DarkmodeToggler,
} as Meta<typeof Navbar.DarkmodeToggler>;

export const DarkmodeToggler: StoryFn<typeof Navbar.DarkmodeToggler> = () => (
  <Navbar.DarkmodeToggler />
);
