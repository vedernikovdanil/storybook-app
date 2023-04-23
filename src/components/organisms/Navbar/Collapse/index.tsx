import React from 'react';
import cn from 'classnames';
import { uniqueId } from 'lodash';
import Toggler from '../Toggler';

export interface NavbarCollapseProps
  extends React.ComponentPropsWithoutRef<'div'> {
  onCollapse?: (isCollapse: boolean) => void;
}

function Collapse({ onCollapse, className, ...props }: NavbarCollapseProps) {
  const collapseId = React.useRef(uniqueId('navbar-collapse-'));
  const collapseRef = React.useRef<HTMLDivElement>(null);

  const [isCollapsed, setIsCollapsed] = React.useState(false);

  React.useEffect(() => {
    setHeightPropertyStyle();
    onCollapse?.call({}, isCollapsed);

    window.addEventListener('click', hideCollapse);
    return () => {
      window.removeEventListener('click', hideCollapse);
    };
  }, [collapseRef, isCollapsed]);

  function hideCollapse(e: MouseEvent) {
    const el = e.target as HTMLElement;
    const shouldChange = !el.closest('.navbar') || el.tagName === 'A';

    if (isCollapsed && shouldChange) {
      setIsCollapsed(false);
    }
  }

  function setHeightPropertyStyle() {
    const height = collapseRef.current?.scrollHeight;
    height && collapseRef.current?.style.setProperty('--height', `${height}px`);
  }

  function toggleIsCollapsed() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <React.Fragment>
      <Toggler
        className="navbar-collapse-toggler"
        onClick={toggleIsCollapsed}
        aria-controls={collapseId.current}
        aria-expanded={isCollapsed}
      />
      <div
        ref={collapseRef}
        id={collapseId.current}
        className={cn('navbar-collapse', isCollapsed && 'collapsed', className)}
        {...props}
      />
    </React.Fragment>
  );
}

export default Collapse;
