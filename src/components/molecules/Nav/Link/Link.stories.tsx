import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Nav from '../';

const meta: Meta<typeof Nav.Link> = {
  component: Nav.Link,
};

export default meta;

export const Link: StoryObj<typeof Nav.Link> = {
  render: (args) => <Nav.Link {...args} />,

  args: {
    children: 'Link',
  },
};
