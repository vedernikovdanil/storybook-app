import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Container from '.';

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;

export const Default: StoryObj<typeof Container> = {
  args: {
    children: <div className="bg-primary p-2">{'children'}</div>,
    className: 'bg-success',
  },
};
