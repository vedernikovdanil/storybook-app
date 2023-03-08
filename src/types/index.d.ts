export type VariantType =
  | 'light'
  | 'dark'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning';

export type SizeType = 'small' | 'medium' | 'large';

export interface BaseFC<TInitial extends React.ElementType, P = unknown> {
  <As extends React.ElementType = TInitial>(
    props: React.PropsWithChildren<ReplaceProps<As, AsProp<As> & P>>,
    context?: any
  ): React.ReactElement<any, any> | null;
  propTypes?: React.WeakValidationMap<P> | undefined;
  contextTypes?: React.ValidationMap<any> | undefined;
  defaultProps?: Partial<P> | undefined;
  displayName?: string | undefined;
}

type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

type ReplaceProps<Inner extends React.ElementType, P> = Omit<
  React.ComponentProps<Inner>,
  P
> &
  P;

interface AsProp<As extends React.ElementType> {
  as?: As;
}
