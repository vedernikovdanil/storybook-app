import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Form from '..';
import FieldGroup from '.';
import {
  Default as FieldStory,
  WithInput as FieldStoryWithInput,
} from '../Field/Field.stories';
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
        {labels.map((_, index) => (
          <Form.Field key={index} {...(FieldStory.args as any)} />
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
              {...(FieldStoryWithInput.args as any)}
              label={label}
            />
          ))}
      </React.Fragment>
    ),
  },
};
