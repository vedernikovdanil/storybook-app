import React from 'react';

export interface NavbarTogglerProps
  extends Omit<
    React.ComponentPropsWithoutRef<'input'>,
    'type' | 'classNames'
  > {}

function Toggler(
  { className, ...props }: NavbarTogglerProps,
  ref?: React.Ref<HTMLInputElement>
) {
  return (
    <input type="checkbox" className="navbar-toggler" ref={ref} {...props} />
  );
}

export default React.forwardRef(Toggler);
