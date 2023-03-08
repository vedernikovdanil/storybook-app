import React from 'react';
import cn from 'classnames';
import './nav.scss';
import { type BaseFC } from '../../types';

export interface NavLinkProps {
  disabled?: false;
}

const Link: BaseFC<'a', NavLinkProps> = ({
  as = 'a',
  className,
  disabled = false,
  ...props
}) => {
  if (disabled) {
    props = { ...props, 'aria-disabled': disabled, tabIndex: -1 };
  }
  return React.createElement(as, {
    className: cn('nav-link', className),
    ...props,
  });
};

export default Link;
