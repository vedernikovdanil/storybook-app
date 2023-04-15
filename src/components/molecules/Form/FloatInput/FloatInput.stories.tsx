import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Form from '../';

export default {
  component: Form.FloatInput,
  decorators: [(story) => <Form>{story()}</Form>],
} as Meta<typeof Form.FloatInput>;

export const FloatInput: StoryObj<typeof Form.FloatInput> = {
  render: (args) => <Form.FloatInput {...args} />,

  args: {
    label: 'Float label',
  },
};
