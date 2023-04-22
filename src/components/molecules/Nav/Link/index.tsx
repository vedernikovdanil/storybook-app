import React from 'react';
import cn from 'classnames';
import { type BaseProps } from '~/src/types';

export interface NavLinkProps {
  active?: boolean;
  disabled?: boolean;
}

function Link<As extends React.ElementType = 'a'>({
  as = 'a' as As,
  className,
  active = false,
  disabled = false,
  ...props
}: BaseProps<As, NavLinkProps>) {
  return React.createElement(as, {
    className: cn('nav-link', active && 'active', className),
    'aria-disabled': disabled,
    tabIndex: disabled ? -1 : undefined,
    ...props,
  } as Partial<BaseProps<'a', NavLinkProps>>);
}

export default Link;
