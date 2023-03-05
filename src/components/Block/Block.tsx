import cn from 'classnames';
import { VariantTypes } from '../../types';

interface BlockProps extends React.ComponentProps<'div'> {
  variant?: VariantTypes;
}

function Block({ variant = 'light', className, ...props }: BlockProps) {
  return <div className={cn(`bg-${variant}`, className)} {...props} />;
}

export default Block;
