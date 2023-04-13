import { type SizeType, type VariantType } from '../../../types';
import './index.scss';
import cn from 'classnames';
import React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: VariantType;
  size?: SizeType;
}

function Button(
  { variant, size, className, ...props }: ButtonProps,
  ref?: React.Ref<HTMLButtonElement>
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
}

export default React.forwardRef(Button);
