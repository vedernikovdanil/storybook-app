import React from 'react';
import cn from 'classnames';

export interface FormFieldGroupProps
  extends React.ComponentPropsWithoutRef<'div'> {}

function FieldGroup({ className, ...props }: FormFieldGroupProps) {
  return <div className={cn('form-fieldgroup', className)} {...props} />;
}

export default FieldGroup;
