import React from 'react';
import cn from 'classnames';
import { uniqueId } from 'lodash';
import Input, { type FormInputProps } from '../Input';

export interface FormFloatInputProps extends FormInputProps {
  label: React.ReactNode;
  labelProps?: React.ComponentPropsWithoutRef<'label'>;
}

const FloatInput = React.forwardRef<HTMLInputElement, FormFloatInputProps>(
  function ({ label, labelProps, className, ...props }, ref) {
    const inputId = React.useRef(uniqueId('form-floatinput-'));

    return (
      <div className={cn('form-floatinput', className)}>
        <Input ref={ref} id={inputId.current} {...props} />
        <label htmlFor={inputId.current} {...labelProps}>
          {label}
        </label>
      </div>
    );
  }
);
FloatInput.displayName = 'FloatInput';

export default FloatInput;
