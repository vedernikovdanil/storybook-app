import React from 'react';
import useComputedStyle from './useComputedStyle';

function useTextWidth(ref: React.RefObject<HTMLElement>, text?: string) {
  const context = React.useMemo(
    () => document.createElement('canvas').getContext('2d'),
    []
  );
  const styles = useComputedStyle(ref);

  React.useEffect(() => {
    if (context && styles) {
      context.font = `${styles.fontSize} ${styles.fontFamily}`;
    }
  }, [context, styles]);

  return React.useMemo(() => {
    if (!text || !context || !styles) {
      return null;
    }
    return context.measureText(text).width;
  }, [text, context, styles]);
}

export default useTextWidth;
