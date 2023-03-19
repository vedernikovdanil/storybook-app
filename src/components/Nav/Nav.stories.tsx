import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Nav from './Nav';
import { Item } from './Item.stories';
import { Link } from './Link.stories';

export default {
  component: Nav,
  subcomponents: {
    Item: Nav.Item,
    Link: Nav.Link,
  },
} as ComponentMeta<typeof Nav>;

export const Default: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;
Default.args = {
  children: (
    <React.Fragment>
      <Item {...Item.args}>
        <Link {...Link.args} />
      </Item>
      <Item {...Item.args}>
        <Link {...Link.args} />
      </Item>
      <Item {...Item.args}>
        <Link {...Link.args} />
      </Item>
    </React.Fragment>
  ),
};
