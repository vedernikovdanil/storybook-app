import React, { type ChangeEvent } from 'react';
import cn from 'classnames';
import { useGetTextWidth } from '../../../../hooks';

export interface FormInputProps
  extends React.ComponentPropsWithoutRef<'input'> {}

function Input(
  {
    type = 'text',
    placeholder = 'Enter value...',
    onChange: onChangeProp,
    className,
    ...props
  }: FormInputProps,
  ref?: React.Ref<HTMLInputElement | null>
) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const getTextWidth = useGetTextWidth(inputRef);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const width = getTextWidth(e.target.value, true);
    e.target.style.minWidth = `${width}px`;
    e.target.classList.toggle('active', !!e.target.value);

    onChangeProp?.call({}, e);
  }

  React.useImperativeHandle(ref, () => inputRef.current, [inputRef.current]);

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

export default React.forwardRef(Input);
