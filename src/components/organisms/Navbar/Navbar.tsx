import React from 'react';
import cn from 'classnames';
import './index.scss';
import { type VariantType } from '~/src/types';

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

export default Navbar;
