import React from 'react';
import cn from 'classnames';
import Input, { type FormInputProps } from '../Input';
import { uniqueId } from 'lodash';

export interface FormFloatInputProps extends FormInputProps {
  label: React.ReactNode;
  labelProps?: React.ComponentPropsWithoutRef<'label'>;
}

const FloatInput = React.forwardRef<
  HTMLInputElement | null,
  FormFloatInputProps
>(function ({ label, labelProps, className, ...props }, ref) {
  const inputId = React.useRef(uniqueId('form-floatinput-'));

  return (
    <div className={cn('form-floatinput', className)}>
      <label htmlFor={inputId.current} {...labelProps}>
        {label}
      </label>
      <Input id={inputId.current} ref={ref} {...props} />
    </div>
  );
});
FloatInput.displayName = 'FloatInput';

export default FloatInput;
