import type Input from '.';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { largeText } from '../mocks';
import { getSelectorByElement } from '~/src/utils';
import { type PlayStoryObj } from '~/src/types';

const PlayStory: PlayStoryObj<typeof Input> = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const elements = canvas.getAllByPlaceholderText(/.*/);

    for (let i = 0; i < elements.length; ++i) {
      const input = elements[i];
      const selector = getSelectorByElement(input);

      await step(
        `Width must be increase with text input [${selector}]`,
        async () => {
          const beforeWidth = parseFloat(getComputedStyle(input).width);
          await userEvent.type(input, largeText, { delay: 10 });
          const afterWidth = parseFloat(getComputedStyle(input).width);

          userEvent.clear(input);
          input.blur();

          expect(beforeWidth).toBeLessThan(afterWidth);
        }
      );
    }
  },
};

export default PlayStory.play;
