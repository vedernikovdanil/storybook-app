import React from 'react';

function useComputedStyle(ref: React.RefObject<HTMLElement>, args: any[] = []) {
  return React.useMemo(
    () => (ref.current ? window.getComputedStyle(ref.current) : null),
    [ref.current, ...args]
  );
}

export default useComputedStyle;
