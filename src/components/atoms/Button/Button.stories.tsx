import { type StoryObj, type Meta } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
  },
};
