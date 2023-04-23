import React, { type CSSProperties } from 'react';
import cn from 'classnames';

export interface FormFieldGroupProps
  extends React.ComponentPropsWithoutRef<'div'> {
  labelWidth?: number;
}

function FieldGroup({
  labelWidth,
  className,
  style,
  ...props
}: FormFieldGroupProps) {
  style = {
    '--label-width': labelWidth && `${labelWidth}px`,
    ...style,
  } as CSSProperties;

  return (
    <div
      className={cn('form-fieldgroup', className)}
      style={style}
      {...props}
    />
  );
}

export default FieldGroup;
