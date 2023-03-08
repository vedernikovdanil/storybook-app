import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Nav from './Nav';

export default {
  component: Nav.Link,
} as ComponentMeta<typeof Nav.Link>;

export const Link: ComponentStory<typeof Nav.Link> = (args) => (
  <Nav.Link {...args} />
);
Link.args = {
  as: 'a',
  disabled: false,
  children: 'Link',
};
