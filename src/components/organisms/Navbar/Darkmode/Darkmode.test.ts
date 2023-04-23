import { type StoryObj } from '@storybook/react';
import type Darkmode from '.';
import { type NavbarDarkmodeProps } from '.';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { getSelectorByElement } from '~/src/utils';
import sleep from '~/src/utils/sleep';

const Test: StoryObj<typeof Darkmode> = {
  args: {
    'data-testid': 'navbar-darkmode',
  } as NavbarDarkmodeProps,

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const darkmode = canvas.getByTestId('navbar-darkmode');
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
