import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Form from './Form';

export default {
  component: Form.Input,
  decorators: [(story) => <Form>{story()}</Form>],
} as ComponentMeta<typeof Form.Input>;

const Template: ComponentStory<typeof Form.Input> = (args) => (
  <Form.Input {...args} />
);

export const Input = Template.bind({});
