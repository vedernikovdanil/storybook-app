import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import Form from '.';
import { labels } from './mocks';
import { WithInputs as FieldGroupStoryWithInputs } from './FieldGroup/FieldGroup.stories';
import { Default as FloatInputStory } from './FloatInput/FloatInput.stories';

const meta: Meta<typeof Form> = {
  component: Form,
};

export default meta;

export const Default: StoryObj<typeof Form> = {
  render: (args) => <Form {...args} />,
  args: {
    children: (
      <Form.Group legend={'Group component'}>
        <Form.FieldGroup {...FieldGroupStoryWithInputs.args} />
        {labels
          .map((label) => `Float ${label}`)
          .map((label) => (
            <Form.FloatInput
              key={label}
              {...(FloatInputStory.args as any)}
              label={label}
            />
          ))}
      </Form.Group>
    ),
  },
};
