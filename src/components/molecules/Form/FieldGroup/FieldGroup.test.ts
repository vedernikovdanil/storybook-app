import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import type FieldGroup from '.';
import { type PlayStory } from '~/src/types';

const allEqual = (arr: any[]) => arr.every((val) => val === arr[0]);

const Play: PlayStory<typeof FieldGroup> = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);
  const fieldGroup = canvas.getByRole('group');

  await step('Labels widths must be equals', async () => {
    const labels = Array.from(fieldGroup.querySelectorAll('label'));
    const labelsWidths = labels.map((el) => getComputedStyle(el).width);

    expect(allEqual(labelsWidths)).toBeTruthy();
  });
};

export default Play;
