import { type StoryObj } from '@storybook/react';
import type Input from '.';
import { type FormInputProps } from '.';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { largeText } from '../mocks';
import { getSelectorByElement } from '~/src/utils';

const Test: StoryObj<typeof Input> = {
  args: {
    'data-testid': 'form-input',
  } as FormInputProps,

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const elements = canvas.getAllByTestId('form-input');

    for (let i = 0; i < elements.length; ++i) {
      const input = elements[i];
      const selector = getSelectorByElement(input);

      await step(
        `Width must be increase with text input [${selector}]`,
        async () => {
          const { width: beforeWidth } = window.getComputedStyle(input);
          await userEvent.type(input, largeText, { delay: 10 });
          const { width: afterWidth } = window.getComputedStyle(input);

          expect(parseFloat(beforeWidth)).toBeLessThan(parseFloat(afterWidth));
        }
      );
    }
  },
};

export default Test;
