import * as React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Button from '.';
import { themeColors } from '~/src/mocks';
import Test from './Button.test';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
  ...Test,
};

export const AllButtons = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {themeColors.map((theme, index) => (
        <Button key={index} {...Default.args} variant={theme} />
      ))}
    </div>
  ),
  ...Test,
  args: undefined,
};
