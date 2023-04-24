import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Form from '..';
import FloatInput from '.';
import PlayStory from '../Input/Input.test';

export default {
  component: FloatInput,
  decorators: [(story) => <Form>{story()}</Form>],
} as Meta<typeof FloatInput>;

export const Default: StoryObj<typeof FloatInput> = {
  render: (args) => <FloatInput {...args} />,
  args: {
    label: 'Float label',
  },
  play: PlayStory,
};
