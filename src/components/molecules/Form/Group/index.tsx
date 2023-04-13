import React from 'react';
import cn from 'classnames';

export interface FormGroupProps extends React.ComponentProps<'fieldset'> {
  legend?: React.ReactNode;
}

function Group({ legend, className, children, ...props }: FormGroupProps) {
  return (
    <fieldset className={cn('form-group', className)} {...props}>
      {legend ? <legend>{legend}</legend> : undefined}
      {children}
    </fieldset>
  );
}

export default Group;
