import * as React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Button from '.';
import { themeColors } from '~/src/mocks';
import PlayButton from './Button.test';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
  args: {
    children: 'Button',
  },
  play: PlayButton,
};

export const AllVariants = {
  render: () => (
    <table style={{ borderSpacing: '0.5rem' }}>
      <tbody>
        {themeColors.map((theme, index) => (
          <tr key={index}>
            <td>{theme}</td>
            <td>
              <Button {...Default.args} variant={theme} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
  play: PlayButton,
};
