import React from 'react';
import './index.scss';
import cn from 'classnames';

export interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(function (
  { className, ...props },
  ref
) {
  return <div className={cn('container', className)} ref={ref} {...props} />;
});
Container.displayName = 'Container';

export default Container;