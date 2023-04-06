import React from 'react';
import cn from 'classnames';
import { type BaseProps } from '../../../types';
import Input from './Input';
import FloatInput from './FloatInput';

function Form<As extends React.ElementType = 'form'>({
  as = 'form' as As,
  className,
  ...props
}: BaseProps<As>) {
  return React.createElement(as, {
    className: cn('form', className),
    ...props,
  });
}

export default Object.assign(Form, {
  Input,
  FloatInput,
});
