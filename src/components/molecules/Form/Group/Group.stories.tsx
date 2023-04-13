import React from 'react';
import { type Meta, type StoryFn } from '@storybook/react';
import Form from '../Form';
import { Field } from '../Field/Field.stories';
import { type FormFieldProps } from '../Field';

export default {
  component: Form.Group,
  decorators: [(story) => <Form>{story()}</Form>],
} as Meta<typeof Form.Group>;

export const Group: StoryFn<typeof Form.Group> = (args) => (
  <Form.Group {...args} />
);

Group.args = {
  legend: 'Group label',
  children: (
    <React.Fragment>
      <Form.Field {...(Field.args as FormFieldProps)} />
      <Form.Field {...(Field.args as FormFieldProps)} />
      <Form.Field {...(Field.args as FormFieldProps)} />
    </React.Fragment>
  ),
};
