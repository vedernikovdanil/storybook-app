import cn from 'classnames';
import { type BaseProps } from '~/src/types';
import Nav from '@molecules/Nav';
import { type NavLinkProps } from '@molecules/Nav/Link';

function Logo<As extends React.ElementType = 'a'>(
  props: BaseProps<As, NavLinkProps>
) {
  return Nav.Link<As>({
    className: cn('navbar-logo', props?.className),
    ...props,
  });
}

export default Logo;
