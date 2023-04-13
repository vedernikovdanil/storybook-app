import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Form from '../Form';

export default {
  component: Form.Input,
  decorators: [(story) => <Form>{story()}</Form>],
} as Meta<typeof Form.Input>;

export const Input: StoryObj<typeof Form.Input> = {
  render: (args) => <Form.Input {...args} />,
};
