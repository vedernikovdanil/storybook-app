import React from 'react';
import cn from 'classnames';
import Toggler from '../Toggler';

export interface NavbarCollapse extends React.ComponentPropsWithoutRef<'div'> {
  onCollapse?: (isCollapse: boolean) => void;
}

function Collapse({ onCollapse, className, ...props }: NavbarCollapse) {
  const togglerRef = React.useRef<HTMLInputElement>(null);
  const collapseRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    initHeightPropertyStyle();
    window.addEventListener('click', hideCollapse);
    togglerRef.current?.addEventListener('change', onChange);

    return () => {
      window.removeEventListener('click', hideCollapse);
      togglerRef.current?.removeEventListener('change', onChange);
    };
  }, []);

  function hideCollapse(e: MouseEvent) {
    const el = e.target as HTMLElement;
    const shouldChange = !el.closest('.navbar') || el.tagName === 'A';

    if (togglerRef.current?.checked && shouldChange) {
      togglerRef.current.checked = false;
      togglerRef.current.dispatchEvent(new Event('change'));
    }
  }

  function initHeightPropertyStyle() {
    const height = collapseRef.current?.scrollHeight;
    if (height) {
      collapseRef.current?.style.setProperty('--height', `${height}px`);
    }
  }

  function onChange(this: HTMLInputElement) {
    initHeightPropertyStyle();
    onCollapse?.call(this, this.checked);
  }

  return (
    <React.Fragment>
      <Toggler ref={togglerRef} />
      <div
        ref={collapseRef}
        className={cn('navbar-collapse', className)}
        {...props}
      />
    </React.Fragment>
  );
}

export default Collapse;
