import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { getSelectorByElement } from '~/src/utils';
import type FieldGroup from '.';
import { type PlayStoryObj } from '~/src/types';

const allEqual = (arr: any[]) => arr.every((val) => val === arr[0]);

const PlayStory: PlayStoryObj<typeof FieldGroup> = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const fieldGroup = canvas.getByRole('group');
    const selector = getSelectorByElement(fieldGroup);

    await step(`Labels widths must be equals [${selector}]`, async () => {
      const labels = Array.from(fieldGroup.querySelectorAll('label'));
      const labelsWidths = labels.map((el) => getComputedStyle(el).width);

      expect(allEqual(labelsWidths)).toBeTruthy();
    });
  },
};

export default PlayStory.play;
