import React from 'react';
import { type StoryFn, type Meta } from '@storybook/react';
import Navbar from '../';

const meta: Meta<typeof Navbar.DarkmodeToggler> = {
  component: Navbar.DarkmodeToggler,
};

export default meta;

export const DarkmodeToggler: StoryFn<typeof Navbar.DarkmodeToggler> = () => (
  <Navbar.DarkmodeToggler />
);
