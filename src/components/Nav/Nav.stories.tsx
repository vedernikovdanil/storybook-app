import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Nav from './Nav';
import { Item } from './Item.stories';
import { Link } from './Link.stories';

export default {
  component: Nav,
} as ComponentMeta<typeof Nav>;

export const Default: ComponentStory<typeof Nav> = (args) => (
  <Nav {...args}>
    <Item>
      <Link>Home</Link>
    </Item>
    <Item>
      <Link>Test</Link>
    </Item>
    <Item>
      <Link>About</Link>
    </Item>
  </Nav>
);
