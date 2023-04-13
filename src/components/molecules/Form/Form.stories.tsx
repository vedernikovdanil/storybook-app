import React from 'react';
import { type Meta } from '@storybook/react';
import Form from '.';
import { Field } from './Field/Field.stories';
import { FloatInput } from './FloatInput/FloatInput.stories';
import { type FormFieldProps } from './Field';
import { type FormFloatInputProps } from './FloatInput';

export default {
  component: Form,
  subcomponents: {
    Group: Form.Group,
    Input: Form.Input,
    FloatInput: Form.FloatInput,
    Field: Form.Field,
  },
} as Meta<typeof Form>;

export const Default = {
  args: {
    children: (
      <React.Fragment>
        <Form.Group legend={'Form Component'}>
          <Form.Field {...(Field.args as FormFieldProps)} />
          <Form.FloatInput {...(FloatInput.args as FormFloatInputProps)} />
        </Form.Group>
      </React.Fragment>
    ),
  },
};
