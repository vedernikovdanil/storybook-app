import React from 'react';
import cn from 'classnames';

export interface NavbarTogglerProps
  extends React.ComponentPropsWithoutRef<'button'> {}

const Toggler = React.forwardRef<HTMLButtonElement, NavbarTogglerProps>(
  function ({ className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn('navbar-toggler', className)}
        aria-label="Navbar toggler"
        {...props}
      />
    );
  }
);
Toggler.displayName = 'Toggler';

export default Toggler;
