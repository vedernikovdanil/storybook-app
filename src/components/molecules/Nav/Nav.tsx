import React from 'react';
import cn from 'classnames';
import './styles/index.scss';
import Item from './Item';
import Link from './Link';

export interface NavListProps extends React.ComponentProps<'ul'> {
  tabs?: boolean;
}

function Nav({ className, tabs = false, ...props }: NavListProps) {
  return (
    <ul className={cn('nav', { 'nav-tabs': tabs }, className)} {...props} />
  );
}

export default Object.assign(Nav, {
  Item,
  Link,
});
