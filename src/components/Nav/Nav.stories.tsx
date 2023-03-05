import { ComponentMeta, ComponentStory } from '@storybook/react';
import Nav from './Nav';

export default {
  title: 'Components/Nav',
  component: Nav,
  subcomponents: {
    Item: Nav.Item,
    Link: Nav.Link,
  },
} as ComponentMeta<typeof Nav>;

export const Default: ComponentStory<typeof Nav> = (args) => (
  <Nav {...args}>
    <Nav.Item>
      <Nav.Link>Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>Test</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>About</Nav.Link>
    </Nav.Item>
  </Nav>
);
