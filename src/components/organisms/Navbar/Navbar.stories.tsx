import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Navbar from './Navbar';
import Nav from '../../molecules/Nav';
import { Default as NavStory } from '../../molecules/Nav/Nav.stories';

export default {
  component: Navbar,
  subcomponents: {
    Logo: Navbar.Logo,
    Collapse: Navbar.Collapse,
    DarkmodeToggler: Navbar.DarkmodeToggler,
  },
} as ComponentMeta<typeof Navbar>;

export const Default: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
);
Default.args = {
  children: (
    <React.Fragment>
      <Navbar.Logo>Logo</Navbar.Logo>
      <Navbar.Collapse>
        <NavStory {...NavStory.args} />
        <NavStory {...NavStory.args} className="ml-auto">
          <Nav.Item className="ml-auto">
            <Navbar.DarkmodeToggler />
          </Nav.Item>
        </NavStory>
      </Navbar.Collapse>
    </React.Fragment>
  ),
};
