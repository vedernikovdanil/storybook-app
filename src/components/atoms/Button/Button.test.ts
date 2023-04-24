import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Color from 'colorjs.io';
import type Button from '.';
import { getSelectorByElement, sleep } from '~/src/utils';
import { type PlayStoryObj } from '~/src/types';

const Test: PlayStoryObj<typeof Button> = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const elements = canvas.getAllByRole('button');

    for (let i = 0; i < elements.length; ++i) {
      const button = elements[i];
      const selector = getSelectorByElement(button);

      await step(
        `Text and background must have sufficient color contrast [${selector}]`,
        () => {
          const { backgroundColor, color } = getComputedStyle(button);

          const bgColor = new Color(backgroundColor);
          const textColor = new Color(color);
          const contrast = bgColor.contrast(textColor, { algorithm: 'WCAG21' });

          expect(contrast).toBeGreaterThanOrEqual(0.5);
        }
      );

      await step(
        `Background and shadow colors must be different [${selector}]`,
        async () => {
          userEvent.click(button);
          await sleep(500);

          const styles = getComputedStyle(button);
          const boxShadow = /(.*\(.*\)|.*)/g.exec(styles.boxShadow)?.[0] ?? '';

          const bgColor = new Color(styles.backgroundColor);
          const boxShadowColor = new Color(boxShadow);
          const contrast = bgColor.contrast(boxShadowColor, {
            algorithm: 'WCAG21',
          });

          expect(contrast).not.toBe(0);
        }
      );
    }
  },
};

export default Test;
