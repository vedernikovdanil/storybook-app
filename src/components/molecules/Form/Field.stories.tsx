import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Form from './Form';

export default {
  component: Form.Field,
  decorators: [(story) => <Form>{story()}</Form>],
} as ComponentMeta<typeof Form.Field>;

const Template: ComponentStory<typeof Form.Field> = (args) => (
  <Form.Field {...args} />
);

export const Field = Template.bind({});
Field.args = {
  label: 'Input label',
  children: <Form.Input />,
};
