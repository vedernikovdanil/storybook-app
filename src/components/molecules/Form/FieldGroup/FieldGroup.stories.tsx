import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Form from '..';
import FieldGroup from '.';
import {
  Default as FieldStory,
  WithInput as FieldStoryWithInput,
} from '../Field/Field.stories';
import { Default as InputStory } from '../Input/Input.stories';
import { labels } from '../mocks';
import Test from './FieldGroup.test';

export default {
  component: FieldGroup,
  decorators: [(story) => <Form>{story()}</Form>],
} as Meta<typeof FieldGroup>;

const Template: StoryObj<typeof FieldGroup> = {
  render: (args) => <FieldGroup {...args} />,
  args: Test.args,
  play: async (...args) => {
    await Promise.all(
      [Test, InputStory].map(async ({ play }) => await play?.apply({}, args))
    );
  },
};

export const Default: StoryObj<typeof FieldGroup> = {
  ...Template,
  args: {
    ...Template.args,
    children: (
      <React.Fragment>
        {labels.map((_, index) => (
          <Form.Field key={index} {...(FieldStory.args as any)} />
        ))}
      </React.Fragment>
    ),
  },
  play: Test.play,
};

export const WithInputs: StoryObj<typeof FieldGroup> = {
  ...Template,
  args: {
    ...Template.args,
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
