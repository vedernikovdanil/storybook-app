import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Navbar from './Navbar';

export default {
  component: Navbar.DarkmodeToggler,
} as ComponentMeta<typeof Navbar.DarkmodeToggler>;

export const DarkmodeToggler: ComponentStory<
  typeof Navbar.DarkmodeToggler
> = () => <Navbar.DarkmodeToggler />;
