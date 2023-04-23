import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Form from '..';
import Field from '.';
import { Default as InputStory } from '../Input/Input.stories';

export default {
  component: Field,
  decorators: [(story) => <Form>{story()}</Form>],
} as Meta<typeof Field>;

const Template: StoryObj<typeof Field> = {
  render: (args) => <Field {...args} />,
  play: InputStory.play,
};

export const Default: StoryObj<typeof Field> = {
  ...Template,
  args: {
    label: 'label',
    children: 'children',
  },
  play: undefined,
};

export const WithInput: StoryObj<typeof Field> = {
  ...Template,
  args: {
    label: 'Field label',
    children: <Form.Input {...InputStory.args} />,
  },
};

export const WithThreeInputs: StoryObj<typeof Field> = {
  ...Template,
  args: {
    label: 'Field label',
    children: (
      <React.Fragment>
        <Form.Input {...InputStory.args} />
        <Form.Input {...InputStory.args} />
        <Form.Input {...InputStory.args} />
      </React.Fragment>
    ),
  },
};
