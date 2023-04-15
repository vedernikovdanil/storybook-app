import React, { type ChangeEvent } from 'react';
import cn from 'classnames';
import { useGetTextWidth } from '~/src/hooks';

export interface FormInputProps
  extends React.ComponentPropsWithoutRef<'input'> {}

const Input = React.forwardRef<HTMLInputElement | null, FormInputProps>(
  function Component(
    {
      type = 'text',
      placeholder = 'Enter value...',
      onChange: onChangeProp,
      className,
      ...props
    },
    ref
  ) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const getTextWidth = useGetTextWidth(inputRef);

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      const width = getTextWidth(e.target.value, true);
      e.target.style.setProperty('--width', `${width}px`);
      e.target.classList.toggle('active', !!e.target.value);

      onChangeProp?.call({}, e);
    }

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    return (
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={cn('form-input', className)}
        {...props}
      />
    );
  }
);

export default Input;
