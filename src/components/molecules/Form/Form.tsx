import React from 'react';
import cn from 'classnames';
import './index.scss';

export interface FormProps extends React.ComponentPropsWithoutRef<'form'> {}

const Form = React.forwardRef<HTMLFormElement, FormProps>(function (
  { className, ...props },
  ref
) {
  return <form className={cn('form', className)} ref={ref} {...props} />;
});
Form.displayName = 'Form';

export default Form;
