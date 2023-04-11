import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Form from './Form';
import { Field } from './Field.stories';
import { FloatInput } from './FloatInput.stories';
import { type FormFieldProps } from './Field';
import { type FormFloatInputProps } from './FloatInput';

export default {
  component: Form,
  subcomponents: {
    Input: Form.Input,
    FloatInput: Form.FloatInput,
    Field: Form.Field,
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <React.Fragment>
      <fieldset>
        <legend>Form Component</legend>
        <Field {...(Field.args as FormFieldProps)} />
        <FloatInput {...(FloatInput.args as FormFloatInputProps)} />
      </fieldset>
    </React.Fragment>
  ),
};
