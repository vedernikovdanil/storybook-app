import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Form from '../';

export default {
  component: Form.Field,
  decorators: [(story) => <Form>{story()}</Form>],
} as Meta<typeof Form.Field>;

export const Field: StoryObj<typeof Form.Field> = {
  render: (args) => <Form.Field {...args} />,

  args: {
    label: 'Field label',
    children: <Form.Input />,
  },
};
