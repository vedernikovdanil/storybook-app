import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Form from '..';
import Group from '.';

export default {
  component: Group,
  decorators: [(story) => <Form>{story()}</Form>],
} as Meta<typeof Group>;

export const Default: StoryObj<typeof Group> = {
  render: (args) => <Group {...args} />,

  args: {
    legend: 'legend',
    children: 'children',
  },
};
