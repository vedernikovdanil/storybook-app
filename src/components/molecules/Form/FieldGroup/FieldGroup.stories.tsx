import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Form from '..';
import FieldGroup from '.';
import * as FieldStory from '../Field/Field.stories';
import { labels } from '../mocks';

export default {
  component: FieldGroup,
  decorators: [(story) => <Form>{story()}</Form>],
} as Meta<typeof FieldGroup>;

const Template: StoryObj<typeof FieldGroup> = {
  render: (args) => <FieldGroup {...args} />,
};

export const Default: StoryObj<typeof FieldGroup> = {
  ...Template,
  args: {
    children: (
      <React.Fragment>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <Form.Field key={index} {...(FieldStory.Default.args as any)} />
          ))}
      </React.Fragment>
    ),
  },
};

export const WithInputs: StoryObj<typeof FieldGroup> = {
  ...Template,
  args: {
    children: (
      <React.Fragment>
        {labels
          .map((label) => `Field ${label}`)
          .map((label) => (
            <Form.Field
              key={label}
              {...(FieldStory.WithInput.args as any)}
              label={label}
            />
          ))}
      </React.Fragment>
    ),
  },
};

export const WithThreeInputs: StoryObj<typeof FieldGroup> = {
  ...Template,
  args: {
    children: (
      <React.Fragment>
        {labels
          .map((label) => `Field ${label}`)
          .map((label) => (
            <Form.Field
              key={label}
              {...(FieldStory.WithThreeInput.args as any)}
              label={label}
            />
          ))}
      </React.Fragment>
    ),
  },
};
