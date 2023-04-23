import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Nav from '.';
import { Default as ItemStory } from './Item/Item.stories';
import { Default as LinkStory } from './Link/Link.stories';

const meta: Meta<typeof Nav> = {
  component: Nav,
};

export default meta;

export const Default: StoryObj<typeof Nav> = {
  render: (args) => <Nav {...args} />,
  args: {
    children: (
      <React.Fragment>
        <Nav.Item {...ItemStory.args}>
          <Nav.Link {...LinkStory.args} active />
        </Nav.Item>
        <Nav.Item {...ItemStory.args}>
          <Nav.Link {...LinkStory.args} />
        </Nav.Item>
        <Nav.Item {...ItemStory.args}>
          <Nav.Link {...LinkStory.args} disabled />
        </Nav.Item>
      </React.Fragment>
    ),
  },
};
