import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Form from '..';
import FloatInput from '.';
import PlayInput from '../Input/Input.test';
import { WithFormatter as WithFormatterInput } from '../Input/Input.stories';

export default {
  component: FloatInput,
  decorators: [(story) => <Form>{story()}</Form>],
} as Meta<typeof FloatInput>;

export const Default: StoryObj<typeof FloatInput> = {
  render: (args) => <FloatInput {...args} />,
  args: {
    label: 'Float label',
  },
  play: PlayInput,
};

export const WithFormatter: StoryObj<typeof FloatInput> = {
  render: (args) => <FloatInput {...args} />,
  args: {
    label: 'Float label',
    formatter: WithFormatterInput.args?.formatter,
  },
  play: WithFormatterInput.play,
};
