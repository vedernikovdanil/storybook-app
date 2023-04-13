import React from 'react';
import cn from 'classnames';
import './index.scss';
import { type VariantType } from '../../../types';
import Logo from './Logo';
import Collapse from './Collapse';
import Toggler from './Toggler';
import DarkmodeToggler from './DarkmodeToggler';

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
  Toggler,
  DarkmodeToggler,
});
