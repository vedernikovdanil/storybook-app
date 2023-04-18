import React from 'react';

export interface NavbarTogglerProps
  extends React.ComponentPropsWithoutRef<'input'> {}

const Toggler = React.forwardRef<HTMLInputElement, NavbarTogglerProps>(
  function (props, ref) {
    return (
      <input
        type="checkbox"
        className="navbar-toggler"
        aria-label="Navbar toggler"
        ref={ref}
        {...props}
      />
    );
  }
);
Toggler.displayName = 'Toggler';

export default Toggler;
