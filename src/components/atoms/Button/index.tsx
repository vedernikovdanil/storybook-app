import React from 'react';
import './index.scss';
import cn from 'classnames';
import { type SizeType, type VariantType } from '~/src/types';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: VariantType;
  size?: SizeType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function (
  { variant = 'light', size, className, ...props },
  ref
) {
  return (
    <button
      className={cn(
        'btn',
        size && `btn-${size}`,
        variant && `bg-${variant}`,
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export default Button;
