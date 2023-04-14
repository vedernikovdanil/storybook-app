import React from 'react';
import cn from 'classnames';

export interface FormGroupProps
  extends React.ComponentPropsWithoutRef<'fieldset'> {
  legend?: React.ReactNode;
}

const Group = React.forwardRef<HTMLFieldSetElement, FormGroupProps>(
  function Component({ legend, className, children, ...props }, ref) {
    return (
      <fieldset className={cn('form-group', className)} ref={ref} {...props}>
        {legend ? <legend>{legend}</legend> : undefined}
        {children}
      </fieldset>
    );
  }
);

export default Group;
