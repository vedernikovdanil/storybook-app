import React from 'react';
import cn from 'classnames';
import './index.scss';
import Group from './Group';
import Field from './Field';
import Input from './Input';
import FloatInput from './FloatInput';

export interface FormProps extends React.ComponentPropsWithoutRef<'form'> {}

function Form(
  { className, ...props }: FormProps,
  ref?: React.Ref<HTMLFormElement>
) {
  return <form className={cn('form', className)} ref={ref} {...props} />;
}

export default Object.assign(React.forwardRef(Form), {
  Group,
  Field,
  Input,
  FloatInput,
});
