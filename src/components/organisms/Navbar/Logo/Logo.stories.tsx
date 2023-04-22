import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Logo from '.';

const meta: Meta<typeof Logo> = {
  component: Logo,
};

export default meta;

export const Default: StoryObj<typeof Logo> = {
  render: (args) => <Logo {...args} />,

  args: {
    children: 'Logo',
  },
};
