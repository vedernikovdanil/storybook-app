import { type StoryObj, type Meta } from '@storybook/react';
import Button from './Button';

export default {
  component: Button,
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
  },
};
