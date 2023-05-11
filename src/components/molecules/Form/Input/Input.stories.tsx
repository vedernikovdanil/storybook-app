import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import Form from '..';
import Input from '.';
import PlayInput, { PlayBuilder } from './Input.test';

export default {
  component: Input,
  decorators: [(story) => <Form>{story()}</Form>],
} as Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {
  render: (args) => <Input {...args} />,
  play: PlayInput,
};

const getRandomNumber = (legnth: number) =>
  Array(legnth)
    .fill(null)
    .map(() => Math.round(Math.random() * 9))
    .join('');

export const WithFormatter: StoryObj<typeof Input> = {
  ...Default,
  args: {
    formatter: (value) => {
      value = value.replace(/\s/g, '');
      const matchValue = value.match(/(?<integer>\d*)(?<mantissa>[,,.]\d*)?/);
      if (!matchValue) {
        return '';
      }
      value = matchValue[0];
      const integer = matchValue.groups?.integer ?? '';
      const mantissa = matchValue.groups?.mantissa ?? '';

      return value.trim() ? BigInt(integer).toLocaleString() + mantissa : '';
    },
  },
  play: PlayBuilder(`${getRandomNumber(25)}.${getRandomNumber(10)}`, 100),
};
