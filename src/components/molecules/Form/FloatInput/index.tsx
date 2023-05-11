import React, { type CSSProperties, type ChangeEvent } from 'react';
import cn from 'classnames';
import { uniqueId } from 'lodash';
import Input, { type FormInputProps } from '../Input';

export interface FormFloatInputProps extends FormInputProps {
  label: React.ReactNode;
  labelProps?: React.ComponentPropsWithoutRef<'label'>;
}

const FloatInput = React.forwardRef<HTMLInputElement, FormFloatInputProps>(
  function (
    { label, labelProps, className, onChange: onChangeProp, ...props },
    ref
  ) {
    const inputId = React.useRef(uniqueId('form-floatinput-'));
    const [width, setWidth] = React.useState('');

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      setWidth(e.target.style.getPropertyValue('--width'));

      onChangeProp?.call({}, e);
    }

    return (
      <div
        className={cn('form-floatinput', className)}
        style={{ '--width': width } as CSSProperties}
      >
        <Input ref={ref} id={inputId.current} onChange={onChange} {...props} />
        <label htmlFor={inputId.current} {...labelProps}>
          {label}
        </label>
      </div>
    );
  }
);
FloatInput.displayName = 'FloatInput';

export default FloatInput;
