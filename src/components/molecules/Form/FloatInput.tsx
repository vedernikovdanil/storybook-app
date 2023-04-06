import React from 'react';
import cn from 'classnames';
import Input, { type FormInputProps } from './Input';

export interface FormFloatInputProps extends React.ComponentProps<'div'> {
  label: React.ReactElement;
  inputProps: FormInputProps;
}

function FloatInput({
  label,
  inputProps,
  className,
  ...props
}: FormFloatInputProps) {
  return (
    <div className={cn('form-floatInput', className)} {...props}>
      <label>{label}</label>
      <Input {...inputProps} />
    </div>
  );
}

export default FloatInput;
