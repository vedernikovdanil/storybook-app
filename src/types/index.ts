import type React from 'react';
import { type StoryObj } from '@storybook/react';

export type VariantType =
  | 'light'
  | 'dark'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'danger'
  | 'warning';

export type SizeType = 'small' | 'medium' | 'large';

export type BaseProps<
  As extends React.ElementType,
  P = unknown
> = React.PropsWithChildren<ReplaceProps<As, AsProp<As> & P>>;

export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export type ReplaceProps<Inner extends React.ElementType, P> = Omit<
  React.ComponentPropsWithoutRef<Inner>,
  P
> &
  P;

export interface AsProp<As extends React.ElementType> {
  as?: As;
}

export type PlayStory<Component extends React.FC> = Required<
  StoryObj<Component>
>['play'];
