import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Nav from '.';
import { Default as Item } from './Item/Item.stories';
import { Default as Link } from './Link/Link.stories';

const meta: Meta<typeof Nav> = {
  component: Nav,
};

export default meta;

export const Default: StoryObj<typeof Nav> = {
  render: (args) => <Nav {...args} />,

  args: {
    children: (
      <React.Fragment>
        <Nav.Item {...Item.args}>
          <Nav.Link {...Link.args} active />
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
