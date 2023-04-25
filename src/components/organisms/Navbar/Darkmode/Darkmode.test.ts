import type Darkmode from '.';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { sleep } from '~/src/utils';
import { type PlayStory } from '~/src/types';

const Play: PlayStory<typeof Darkmode> = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);
  const darkmode = canvas.getByRole('button');

  await step('Should be change theme to dark on click', async () => {
    await sleep(1000);

    const beforeStyle = { ...getComputedStyle(document.documentElement) };
    userEvent.click(darkmode);
    await sleep(1000);
    const afterStyle = { ...getComputedStyle(document.documentElement) };

    const beforeBgColor = beforeStyle.backgroundColor;
    const afterBgColor = afterStyle.backgroundColor;

    expect(beforeBgColor).not.toBe(afterBgColor);
  });
};

export default Play;
