import React from 'react';
import cn from 'classnames';
import './index.scss';

export interface NavListProps extends React.ComponentPropsWithoutRef<'ul'> {
  tabs?: boolean;
}

function Nav({ className, tabs = false, ...props }: NavListProps) {
  return <ul className={cn('nav', tabs && 'nav-tabs', className)} {...props} />;
}

export default Nav;
