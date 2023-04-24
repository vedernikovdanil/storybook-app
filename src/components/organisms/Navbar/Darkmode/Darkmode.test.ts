import type Darkmode from '.';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { getSelectorByElement, sleep } from '~/src/utils';
import { type PlayStoryObj } from '~/src/types';

const Test: PlayStoryObj<typeof Darkmode> = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const darkmode = canvas.getByRole('button');
    const selector = getSelectorByElement(darkmode);

    await step(
      `Should be change theme to dark on click [${selector}]`,
      async () => {
        await sleep(1000);

        const beforeStyle = { ...getComputedStyle(document.documentElement) };
        userEvent.click(darkmode);
        await sleep(1000);
        const afterStyle = { ...getComputedStyle(document.documentElement) };

        const beforeBgColor = beforeStyle.backgroundColor;
        const afterBgColor = afterStyle.backgroundColor;

        expect(beforeBgColor).not.toBe(afterBgColor);
      }
    );
  },
};

export default Test;
