import React from 'react';
import cn from 'classnames';
import Nav from '@molecules/Nav';
import { type NavLinkProps } from '@molecules/Nav/Link';
import { type BaseProps } from '~/src/types';

function Logo<As extends React.ElementType = 'a'>({
  as = 'a' as As,
  className,
  ...props
}: BaseProps<As, NavLinkProps>) {
  return <Nav.Link className={cn('navbar-logo', className)} {...props} />;
}

export default Logo;
