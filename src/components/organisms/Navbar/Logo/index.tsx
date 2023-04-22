import React from 'react';
import cn from 'classnames';
import { type BaseProps } from '~/src/types';

function Logo<As extends React.ElementType = 'a'>({
  as = 'a' as As,
  className,
  ...props
}: BaseProps<As>) {
  return React.createElement(as, {
    className: cn('navbar-logo', className),
    ...props,
  } as Partial<BaseProps<'a'>>);
}

export default Logo;
