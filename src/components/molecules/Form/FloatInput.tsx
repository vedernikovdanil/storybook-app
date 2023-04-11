import React from 'react';
import cn from 'classnames';
import Input, { type FormInputProps } from './Input';
import { uniqueId } from 'lodash';

export interface FormFloatInputProps extends Omit<FormInputProps, 'id'> {
  label: React.ReactNode;
  labelProps?: Omit<React.ComponentProps<'label'>, 'htmlFor'>;
  ref?: React.Ref<HTMLInputElement>;
}

function FloatInput({
  label,
  labelProps,
  className,
  ...props
}: FormFloatInputProps) {
  const fieldId = React.useRef(uniqueId('form-field-'));

  return (
    <div className={cn('form-floatInput', className)}>
      <label htmlFor={fieldId.current} {...labelProps}>
        {label}
      </label>
      <Input id={fieldId.current} {...props} />
    </div>
  );
}

export default FloatInput;
