import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Form from './Form';

export default {
  component: Form.FloatInput,
  decorators: [(story) => <Form>{story()}</Form>],
} as ComponentMeta<typeof Form.FloatInput>;

const Template: ComponentStory<typeof Form.FloatInput> = (args) => (
  <Form.FloatInput {...args} />
);

export const FloatInput = Template.bind({});
FloatInput.args = {
  label: 'Input label',
};
