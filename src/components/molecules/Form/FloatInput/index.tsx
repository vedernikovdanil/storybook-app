import React, { type CSSProperties } from 'react';
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
>(function ({ label, labelProps, className, style, ...props }, ref) {
  const inputId = React.useRef(uniqueId('form-floatinput-'));
  const inputRef = React.useRef<HTMLInputElement>(null);
  const labelRef = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const innerWidth = useInnerWidth(inputRef);

  React.useEffect(() => {
    if (labelRef.current) {
      const width = labelRef.current.clientWidth + (innerWidth ?? 0);
      if (labelWidth !== width) {
        setLabelWidth(width);
      }
    }
  }, [labelRef.current, innerWidth]);

  React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  return (
    <div className={cn('form-floatinput', className)}>
      <label ref={labelRef} htmlFor={inputId.current} {...labelProps}>
        {label}
      </label>
      <Input
        ref={inputRef}
        id={inputId.current}
        style={{ '--min-width': `${labelWidth}px`, ...style } as CSSProperties}
        {...props}
      />
    </div>
  );
});
FloatInput.displayName = 'FloatInput';

export default FloatInput;
