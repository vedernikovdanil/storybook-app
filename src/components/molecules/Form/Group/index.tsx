import React from 'react';
import cn from 'classnames';

export interface FormGroupProps
  extends React.ComponentPropsWithoutRef<'fieldset'> {
  legend?: React.ReactNode;
}

function Group(
  { legend, className, children, ...props }: FormGroupProps,
  ref?: React.Ref<HTMLFieldSetElement>
) {
  return (
    <fieldset className={cn('form-group', className)} ref={ref} {...props}>
      {legend ? <legend>{legend}</legend> : undefined}
      {children}
    </fieldset>
  );
}

export default Group;
