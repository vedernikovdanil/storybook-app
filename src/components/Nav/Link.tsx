import React from 'react';
import cn from 'classnames';
import './nav.scss';
import { type ComponentProps } from '../../types';

export interface NavLinkProps {
  disabled?: boolean;
}

function Link<As extends React.ElementType>({
  as = 'a' as As,
  className,
  disabled = false,
  ...props
}: ComponentProps<As, NavLinkProps>) {
  if (disabled) {
    props = { ...props, 'aria-disabled': disabled, tabIndex: -1 };
  }
  return React.createElement(as, {
    className: cn('nav-link', className),
    ...props,
  });
}

export default Link;
