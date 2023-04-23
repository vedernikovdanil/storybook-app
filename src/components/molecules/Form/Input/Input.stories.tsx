import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Form from '..';
import Input from '.';
import Test from './Input.test';

export default {
  component: Input,
  decorators: [(story) => <Form>{story()}</Form>],
} as Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {
  render: (args) => <Input {...args} />,
  ...Test,
};
