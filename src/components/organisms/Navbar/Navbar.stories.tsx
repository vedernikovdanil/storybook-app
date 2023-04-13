import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Navbar from './Navbar';
import Nav from '../../molecules/Nav';
import { Default as NavStory } from '../../molecules/Nav/Nav.stories';

export default {
  component: Navbar,
  subcomponents: {
    Logo: Navbar.Logo,
    Toggler: Navbar.Toggler,
    Collapse: Navbar.Collapse,
    DarkmodeToggler: Navbar.DarkmodeToggler,
  },
} as Meta<typeof Navbar>;

export const Default: StoryObj<typeof Navbar> = {
  args: {
    children: (
      <React.Fragment>
        <Navbar.Logo>Logo</Navbar.Logo>
        <Navbar.Collapse>
          <Nav {...NavStory.args} />
          <Nav {...NavStory.args} className="ml-auto">
            <Nav.Item className="ml-auto">
              <Navbar.DarkmodeToggler />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </React.Fragment>
    ),
  },
};
