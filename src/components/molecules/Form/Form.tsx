import React from 'react';
import cn from 'classnames';
import './styles/index.scss';
import { type BaseProps } from '../../../types';
import Group from './Group';
import Field from './Field';
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
  Group,
  Field,
  Input,
  FloatInput,
});
