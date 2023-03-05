import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Block from './Block';

export default {
  title: 'Components/Block',
  component: Block,
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = (args) => <Block {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'p-5',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa consequuntur officiis, non perspiciatis quasi corporis! Veniam quae nobis dolor esse fuga illum rerum eligendi. Enim necessitatibus mollitia nemo corporis.',
};
