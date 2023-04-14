import React from 'react';

export interface NavbarTogglerProps
  extends Omit<
    React.ComponentPropsWithoutRef<'input'>,
    'type' | 'classNames'
  > {}

const Toggler = React.forwardRef<HTMLInputElement, NavbarTogglerProps>(
  function Component({ className, ...props }, ref) {
    return (
      <input type="checkbox" className="navbar-toggler" ref={ref} {...props} />
    );
  }
);

export default Toggler;
