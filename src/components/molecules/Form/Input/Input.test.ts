import type Input from '.';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { largeText } from '../mocks';
import { type PlayStory } from '~/src/types';

export function PlayBuilder(text: string, delay = 50): PlayStory<typeof Input> {
  return async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const elements = canvas.getAllByPlaceholderText(/.*/);

    for (let i = 0; i < elements.length; ++i) {
      const input = elements[i];

      await step('Width must be increase with text input', async () => {
        const beforeWidth = parseFloat(getComputedStyle(input).width);
        await userEvent.type(input, text, { delay });
        const afterWidth = parseFloat(getComputedStyle(input).width);

        expect(beforeWidth).toBeLessThan(afterWidth);
      });
    }
  };
}

export default PlayBuilder(largeText);
