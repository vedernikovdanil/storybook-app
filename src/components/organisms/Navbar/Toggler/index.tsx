import React from 'react';

export interface NavbarToggler
  extends Omit<
    React.ComponentPropsWithoutRef<'input'>,
    'type' | 'classNames'
  > {}

function Toggler(
  { className, ...props }: NavbarToggler,
  ref?: React.Ref<HTMLInputElement>
) {
  return (
    <input type="checkbox" className="navbar-toggler" ref={ref} {...props} />
  );
}

export default React.forwardRef(Toggler);
