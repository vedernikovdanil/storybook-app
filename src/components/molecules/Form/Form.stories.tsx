import React from 'react';
import { type Meta } from '@storybook/react';
import Form from '.';
import { FloatInput } from './FloatInput/FloatInput.stories';
import { Field } from './Field/Field.stories';

const meta: Meta<typeof Form> = {
  component: Form,
  subcomponents: {
    Group: Form.Group,
    Field: Form.Field,
    Input: Form.Input,
    FloatInput: Form.FloatInput,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

export const Default = {
  args: {
    children: (
      <React.Fragment>
        <Form.Group legend={'Form Component'}>
          <Form.Field {...(Field.args as any)} />
          <Form.FloatInput {...(FloatInput.args as any)} />
        </Form.Group>
      </React.Fragment>
    ),
  },
};
