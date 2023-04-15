import React from 'react';
import cn from 'classnames';

export interface FormFieldProps extends React.ComponentPropsWithoutRef<'div'> {
  label: React.ReactNode;
  labelProps?: React.ComponentPropsWithoutRef<'label'>;
}

function Field({
  label,
  labelProps,
  className,
  children,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn('form-field', className)}>
      <label {...labelProps}>{label}</label>
      <div {...props}>{children}</div>
    </div>
  );
}

export default Field;
