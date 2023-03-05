import React from 'react';
import cn from 'classnames';
import './button.scss';
import { VariantTypes } from '../../types';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: VariantTypes;
}

function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button className={cn('btn', `bg-${variant}`, className)} {...props} />
  );
}

export default Button;
