import React from 'react';
import cn from 'classnames';

export interface FormInputProps extends React.ComponentProps<'input'> {}

function Input({ type = 'text', className, ...props }: FormInputProps) {
  return (
    <input type={'text'} className={cn('form-input', className)} {...props} />
  );
}

export default Input;
