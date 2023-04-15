import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Navbar from '.';
import Nav from '@molecules/Nav';
import { Default as NavStory } from '@molecules/Nav/Nav.stories';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  subcomponents: {
    Logo: Navbar.Logo,
    Toggler: Navbar.Toggler,
    Collapse: Navbar.Collapse,
    Darkmode: Navbar.Darkmode,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

export const Default: StoryObj<typeof Navbar> = {
  args: {
    children: (
      <React.Fragment>
        <Navbar.Logo>Logo</Navbar.Logo>
        <Navbar.Collapse>
          <Nav {...NavStory.args} />
          <Nav {...NavStory.args} className="ml-auto">
            <Nav.Item className="ml-auto">
              <Navbar.Darkmode />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </React.Fragment>
    ),
  },
};
