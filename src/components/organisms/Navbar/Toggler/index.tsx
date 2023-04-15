import React from 'react';

export interface NavbarTogglerProps
  extends React.ComponentPropsWithoutRef<'input'> {}

const Toggler = React.forwardRef<HTMLInputElement, NavbarTogglerProps>(
  function Component(props, ref) {
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

export default Toggler;
