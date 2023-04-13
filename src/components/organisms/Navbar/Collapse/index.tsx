import React from 'react';
import cn from 'classnames';

export interface NavbarCollapse extends React.ComponentPropsWithoutRef<'div'> {
  onCollapse?: (isCollapse: boolean) => void;
}

function Collapse({ onCollapse, className, ...props }: NavbarCollapse) {
  const toggleRef = React.useRef<HTMLInputElement>(null);
  const collapseRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    initHeightPropertyStyle();
    window.addEventListener('click', hideCollapse);
    toggleRef.current?.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('click', hideCollapse);
      toggleRef.current?.removeEventListener('change', onChange);
    };
  }, []);

  function hideCollapse(e: MouseEvent) {
    const el = e.target as HTMLElement;
    const shouldChange = !el.closest('.navbar') || el.tagName === 'A';
    if (toggleRef.current?.checked && shouldChange) {
      toggleRef.current.checked = false;
      toggleRef.current.dispatchEvent(new Event('change'));
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
      <input ref={toggleRef} type="checkbox" className="navbar-toggler" />
      <div
        ref={collapseRef}
        className={cn('navbar-collapse', className)}
        {...props}
      />
    </React.Fragment>
  );
}

export default Collapse;
