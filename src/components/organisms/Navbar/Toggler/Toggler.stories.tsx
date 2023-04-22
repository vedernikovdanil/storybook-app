import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Toggler from '.';

const meta: Meta<typeof Toggler> = {
  component: Toggler,
};

export default meta;

export const Default: StoryObj<typeof Toggler> = {
  render: (args) => <Toggler {...args} />,
};
