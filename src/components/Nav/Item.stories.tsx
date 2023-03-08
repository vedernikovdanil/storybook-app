import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Nav from './Nav';

export default {
  component: Nav.Item,
  decorators: [(story) => <ul>{story()}</ul>],
} as ComponentMeta<typeof Nav.Item>;

export const Item: ComponentStory<typeof Nav.Item> = (args) => (
  <Nav.Item {...args} />
);
Item.args = {
  children: 'Item',
};
