import React from 'react';
import cn from 'classnames';

export interface NavItemProps extends React.ComponentProps<'li'> {}

function Nav({ className, ...props }: NavItemProps) {
  return <li className={cn('nav-item', className)} {...props} />;
}

export default Nav;
