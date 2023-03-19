import React from 'react';
import Nav from '../Nav';
import cn from 'classnames';
import { type NavLinkProps } from '../Nav/Link';
import { type BaseProps } from '../../types';

function Logo<As extends React.ElementType>({
  className,
  ...props
}: BaseProps<As, NavLinkProps>) {
  return <Nav.Link className={cn('navbar-logo', className)} {...props} />;
}

export default Logo;
