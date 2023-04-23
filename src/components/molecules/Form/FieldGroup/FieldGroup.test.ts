import { type StoryObj } from '@storybook/react';
import type FieldGroup from '.';
import { type FormFieldGroupProps } from '.';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { getSelectorByElement } from '~/src/utils';

const TEST_ID = 'form-fieldgroup';

const allEqual = (arr: any[]) => arr.every((val) => val === arr[0]);

const Test: StoryObj<typeof FieldGroup> = {
  args: {
    'data-testid': TEST_ID,
  } as FormFieldGroupProps,

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const fieldGroup = canvas.getByTestId(TEST_ID);
    const selector = getSelectorByElement(fieldGroup);

    await step(`Labels widths must be equals [${selector}]`, async () => {
      const labels = Array.from(fieldGroup.querySelectorAll('label'));
      const labelsWidths = labels
        .map((el) => window.getComputedStyle(el))
        .map(({ width }) => width);

      expect(allEqual(labelsWidths)).toBeTruthy();
    });
  },
};

export default Test;
