export type VariantType =
  | 'light'
  | 'dark'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning';

export type SizeType = 'small' | 'medium' | 'large';

export type ComponentProps<
  As extends React.ElementType,
  P = unknown
> = React.PropsWithChildren<ReplaceProps<As, AsProp<As> & P>>;

type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

type ReplaceProps<Inner extends React.ElementType, P> = Omit<
  React.ComponentProps<Inner>,
  P
> &
  P;

interface AsProp<As extends React.ElementType> {
  as?: As;
}
