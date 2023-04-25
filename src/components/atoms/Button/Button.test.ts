import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Color from 'colorjs.io';
import type Button from '.';
import { sleep } from '~/src/utils';
import { type PlayStory } from '~/src/types';

const Play: PlayStory<typeof Button> = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);
  const elements = canvas.getAllByRole('button');

  for (let i = 0; i < elements.length; ++i) {
    const button = elements[i];

    await step(
      `Text and background must have sufficient color contrast [${button.className}]`,
      () => {
        const { backgroundColor, color } = getComputedStyle(button);

        const bgColor = new Color(backgroundColor);
        const textColor = new Color(color);
        const contrast = bgColor.contrast(textColor, { algorithm: 'WCAG21' });

        expect(contrast).toBeGreaterThanOrEqual(0.5);
      }
    );

    await step(
      `Background and shadow colors must be different [${button.className}]`,
      async () => {
        userEvent.click(button);
        await sleep(500);

        const styles = getComputedStyle(button);
        const boxShadow = /(.*\(.*\)|.*)/.exec(styles.boxShadow)?.[0] ?? '';

        const bgColor = new Color(styles.backgroundColor);
        const boxShadowColor = new Color(boxShadow);
        const contrast = bgColor.contrast(boxShadowColor, {
          algorithm: 'WCAG21',
        });

        expect(contrast).not.toBe(0);
      }
    );
  }
};

export default Play;
