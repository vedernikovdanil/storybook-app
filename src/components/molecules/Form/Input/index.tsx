import React, { type ChangeEvent } from 'react';
import cn from 'classnames';
import { useInnerWidth, useTextWidth } from '~/src/hooks';

export interface FormInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  formatter?: (value: string) => string;
}

const Input = React.forwardRef<HTMLInputElement | null, FormInputProps>(
  function (
    {
      type = 'text',
      placeholder = 'Enter value...',
      onChange: onChangeProp,
      formatter = (value) => value,
      className,
      ...props
    },
    ref
  ) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [value, setValue] = React.useState('');
    const innerWidth = useInnerWidth(inputRef);
    const textWidth = useTextWidth(inputRef, inputRef.current?.value);

    React.useEffect(() => {
      if (inputRef.current) {
        const el = inputRef.current;
        const width = (textWidth ?? 0) + (innerWidth ?? 0);
        el.style.setProperty('--width', `${width}px`);
        el.classList.toggle('active', !!el.value);
      }
    }, [inputRef.current, value, textWidth, innerWidth]);

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      setValue(formatter(e.target.value));
      onChangeProp?.call({}, e);
    }

    return (
      <input
        ref={inputRef}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={cn('form-input', className)}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export default Input;
