import React from 'react';
import cn from 'classnames';
import './index.scss';
import { type VariantType } from '~/src/types';
import Container from '@atoms/Container';

export interface NavbarProps extends React.ComponentPropsWithoutRef<'nav'> {
  variant?: VariantType;
}

function Navbar({ children, variant, className, ...props }: NavbarProps) {
  return (
    <nav
      className={cn('navbar', variant && `bg-${variant}`, className)}
      {...props}
    >
      <Container>{children}</Container>
    </nav>
  );
}

export default Navbar;
