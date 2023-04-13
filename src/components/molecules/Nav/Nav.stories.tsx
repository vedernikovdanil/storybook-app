import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Nav from './Nav';
import { Item } from './Item/Item.stories';
import { Link } from './Link/Link.stories';

export default {
  component: Nav,
  subcomponents: {
    Item: Nav.Item,
    Link: Nav.Link,
  },
} as Meta<typeof Nav>;

export const Default: StoryObj<typeof Nav> = {
  args: {
    children: (
      <React.Fragment>
        <Nav.Item {...Item.args}>
          <Nav.Link {...Link.args} />
        </Nav.Item>
        <Nav.Item {...Item.args}>
          <Nav.Link {...Link.args} />
        </Nav.Item>
        <Nav.Item {...Item.args}>
          <Nav.Link {...Link.args} disabled />
        </Nav.Item>
      </React.Fragment>
    ),
  },
};
