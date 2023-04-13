import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Nav from '../Nav';

export default {
  component: Nav.Link,
} as Meta<typeof Nav.Link>;

export const Link: StoryObj<typeof Nav.Link> = {
  render: (args) => <Nav.Link {...args} />,

  args: {
    children: 'Link',
  },
};
