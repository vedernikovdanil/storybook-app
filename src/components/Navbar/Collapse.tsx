import React from 'react';
import cn from 'classnames';

export interface NavbarCollapse extends React.ComponentPropsWithoutRef<'div'> {}

function Collapse({ className, ...props }: NavbarCollapse) {
  const toggleRef = React.useRef<HTMLInputElement>(null);
  const collapseRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const hide = ({ target }: MouseEvent) => {
      const el = target as HTMLElement;
      if (!el.closest('.navbar') || el.tagName === 'A') {
        toggleRef.current && (toggleRef.current.checked = false);
      }
    };
    setHeight();
    window.addEventListener('click', hide);
    return () => {
      window.removeEventListener('click', hide);
    };
  }, []);

  function setHeight() {
    const height = collapseRef.current?.scrollHeight;
    height && collapseRef.current?.style.setProperty('--height', `${height}px`);
  }

  return (
    <React.Fragment>
      <input
        type="checkbox"
        className="navbar-toggler"
        ref={toggleRef}
        onChange={setHeight}
      />
      <div
        className={cn('navbar-collapse', className)}
        ref={collapseRef}
        {...props}
      />
    </React.Fragment>
  );
}

export default Collapse;
