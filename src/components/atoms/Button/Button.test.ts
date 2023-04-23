import { type StoryObj } from '@storybook/react';
import type Button from '.';
import { type ButtonProps } from '.';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Color from 'colorjs.io';
import { getSelectorByElement } from '~/src/utils';
import sleep from '~/src/utils/sleep';

const Test: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
    'data-testid': 'button',
  } as ButtonProps,

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const elements = canvas.getAllByTestId('button');

    for (let i = 0; i < elements.length; ++i) {
      const button = elements[i];
      const selector = getSelectorByElement(button);

      // remove transition to fast test
      const { transition } = window.getComputedStyle(button);
      button.style.setProperty('transition', 'all 0s');

      await step(
        `Text and background must have sufficient color contrast [${selector}]`,
        () => {
          const { backgroundColor, color } = window.getComputedStyle(button);

          const bgColor = new Color(backgroundColor);
          const textColor = new Color(color);
          const contrast = bgColor.contrast(textColor, { algorithm: 'WCAG21' });

          expect(contrast).toBeGreaterThanOrEqual(0.5);
        }
      );

      await step(
        `Background and shadow colors must be different  [${selector}]`,
        async () => {
          userEvent.click(button);
          await sleep(50);

          const styles = window.getComputedStyle(button);
          const boxShadow = /(.*\(.*\)|.*)/g.exec(styles.boxShadow)?.[0] ?? '';

          const bgColor = new Color(styles.backgroundColor);
          const boxShadowColor = new Color(boxShadow);
          const contrast = bgColor.contrast(boxShadowColor, {
            algorithm: 'WCAG21',
          });

          expect(contrast).not.toBe(0);
        }
      );

      // restore transition style
      button.style.setProperty('transition', transition);
    }
  },
};

export default Test;
