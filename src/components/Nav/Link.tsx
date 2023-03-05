import React from 'react';
import cn from 'classnames';
import './nav.scss';

export interface NavLinkProps extends React.ComponentProps<'a'> {
  disabled?: boolean;
}

function Link({
  className,
  disabled = false,
  href,
  children,
  ...props
}: NavLinkProps) {
  if (disabled) {
    props = { ...props, 'aria-disabled': disabled, tabIndex: -1 };
  }
  return (
    <a className={cn('nav-link', className)} {...props}>
      {children}
    </a>
  );
}

export default Link;
