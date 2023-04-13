import React from 'react';
import cn from 'classnames';
import { type BaseProps } from '../../../../types';

export interface NavLinkProps {
  active?: boolean;
  disabled?: boolean;
}

function Link<As extends React.ElementType = 'a'>(
  {
    as = 'a' as As,
    className,
    active = false,
    disabled = false,
    ...props
  }: BaseProps<As, NavLinkProps>,
  ref?: React.Ref<As>
) {
  if (disabled) {
    props = { ...props, 'aria-disabled': disabled, tabIndex: -1 };
  }
  return React.createElement(as, {
    className: cn('nav-link', active && 'active', className),
    ref,
    ...props,
  });
}

export default React.forwardRef(Link);
