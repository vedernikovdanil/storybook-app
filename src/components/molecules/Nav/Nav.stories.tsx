import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Nav from '.';
import { Item } from './Item/Item.stories';
import { Link } from './Link/Link.stories';

const meta: Meta<typeof Nav> = {
  component: Nav,
  subcomponents: {
    Item: Nav.Item,
    Link: Nav.Link,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

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
