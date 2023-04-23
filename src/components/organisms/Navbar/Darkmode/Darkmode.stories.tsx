import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Darkmode from '.';
import Test from './Darkmode.test';

const meta: Meta<typeof Darkmode> = {
  component: Darkmode,
};

export default meta;

export const Default: StoryObj<typeof Darkmode> = {
  render: (args) => <Darkmode {...args} />,
  ...Test,
};
