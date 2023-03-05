import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';
import { VariantTypes } from '../../types';
import Block from '../Block';

export default {
  title: 'Components/Button',
  component: Block,
} as ComponentMeta<typeof Block>;

const variants: VariantTypes[] = [
  'light',
  'dark',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
];

const Template: ComponentStory<typeof Block> = (args) => <Block {...args} />;

export const Variants = Template.bind({});
Variants.args = {
  className: 'd-flex flex-wrap gap-3 p-3',
  children: variants.map((variant, index) =>
    React.createElement(Button, { key: index, variant }, variant)
  ),
};
