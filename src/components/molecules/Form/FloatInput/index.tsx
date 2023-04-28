import React from 'react';
import cn from 'classnames';
import { uniqueId } from 'lodash';
import Input, { type FormInputProps } from '../Input';
import { useInnerWidth } from '~/src/hooks';

export interface FormFloatInputProps extends FormInputProps {
  label: React.ReactNode;
  labelProps?: React.ComponentPropsWithoutRef<'label'>;
}

const FloatInput = React.forwardRef<
  HTMLInputElement | null,
  FormFloatInputProps
>(function ({ label, labelProps, className, ...props }, ref) {
  const inputId = React.useRef(uniqueId('form-floatinput-'));
  const inputRef = React.useRef<HTMLInputElement>(null);
  const labelRef = React.useRef<HTMLLabelElement>(null);
  const innerWidth = useInnerWidth(inputRef);

  React.useEffect(() => {
    if (labelRef.current && inputRef.current) {
      const width = labelRef.current.clientWidth + (innerWidth ?? 0);
      inputRef.current.style.setProperty('--label-width', `${width}px`);
    }
  }, [labelRef.current, innerWidth]);

  React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  return (
    <div className={cn('form-floatinput', className)}>
      <Input ref={inputRef} id={inputId.current} {...props} />
      <label ref={labelRef} htmlFor={inputId.current} {...labelProps}>
        {label}
      </label>
    </div>
  );
});
FloatInput.displayName = 'FloatInput';

export default FloatInput;
