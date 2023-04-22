import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Link from '.';

const meta: Meta<typeof Link> = {
  component: Link,
};

export default meta;

export const Default: StoryObj<typeof Link> = {
  render: (args) => <Link {...args} />,

  args: {
    children: 'Link',
  },
};
