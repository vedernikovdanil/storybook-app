import React from 'react';
import { type Meta, type StoryFn } from '@storybook/react';
import Form from '../';

export default {
  component: Form.Group,
  decorators: [(story) => <Form>{story()}</Form>],
} as Meta<typeof Form.Group>;

export const Group: StoryFn<typeof Form.Group> = (args) => (
  <Form.Group {...args} />
);

Group.args = {
  legend: 'legend',
  children: 'children',
};
