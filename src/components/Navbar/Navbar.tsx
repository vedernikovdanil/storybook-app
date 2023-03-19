import React from 'react';
import './navbar.scss';
import cn from 'classnames';
import Logo from './Logo';
import Collapse from './Collapse';
import DarkmodeToggler from './DarkmodeToggler';
import { type VariantType } from '../../types';

export interface NavbarProps extends React.ComponentProps<'nav'> {
  variant?: VariantType;
}

function Navbar({ children, variant, className, ...props }: NavbarProps) {
  return (
    <nav
      className={cn('navbar', variant && `bg-${variant}`, className)}
      {...props}
    >
      <div className="container">{children}</div>
    </nav>
  );
}

export default Object.assign(Navbar, {
  Logo,
  Collapse,
  DarkmodeToggler,
});
