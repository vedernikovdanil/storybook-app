import React, { type ChangeEvent } from 'react';
import cn from 'classnames';
import { getInnerWidth, getTextWidth } from '~/src/utils';

export interface FormInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  formatter?: (value: string) => string;
}

const Input = React.forwardRef<HTMLInputElement, FormInputProps>(function (
  {
    type = 'text',
    placeholder = 'Enter value...',
    onChange: onChangeProp,
    formatter,
    className,
    ...props
  },
  ref
) {
  const styleRef = React.useRef<CSSStyleDeclaration>();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    if (!styleRef.current) {
      styleRef.current = getComputedStyle(e.target);
    }
    if (formatter) {
      e.target.value = formatter(e.target.value);
    }
    const style = styleRef.current;
    const width = getInnerWidth(style) + getTextWidth(style, e.target.value);

    e.target.style.setProperty('--width', `${width}px`);
    e.target.classList.toggle('active', !!e.target.value);

    onChangeProp?.call({}, e);
  }

  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={cn('form-input', className)}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export default Input;
