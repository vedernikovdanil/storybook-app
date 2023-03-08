import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
