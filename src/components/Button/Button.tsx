import { type SizeType, type VariantType } from '../../types';
import './button.scss';
import cn from 'classnames';
import React from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: VariantType;
  size?: SizeType;
}

function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'btn',
        size && `btn-${size}`,
        variant && `bg-${variant}`,
        className
      )}
      {...props}
    />
  );
}

export default Button;
