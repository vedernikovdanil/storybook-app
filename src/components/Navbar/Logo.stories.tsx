import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Navbar from './Navbar';

export default {
  component: Navbar.Logo,
} as ComponentMeta<typeof Navbar.Logo>;

export const Logo: ComponentStory<typeof Navbar.Logo> = (args) => (
  <Navbar.Logo {...args} />
);
Logo.args = {
  children: 'Logo',
};
