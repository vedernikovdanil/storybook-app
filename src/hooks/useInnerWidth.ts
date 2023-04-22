import React from 'react';
import useComputedStyle from './useComputedStyle';

function useInnerWidth(ref: React.RefObject<HTMLElement>) {
  const styles = useComputedStyle(ref);

  return React.useMemo(() => {
    if (!styles) {
      return null;
    }
    const innerWidth =
      parseFloat(styles.paddingLeft) +
      parseFloat(styles.paddingRight) +
      parseFloat(styles.borderWidth) * 2;

    return innerWidth;
  }, [styles]);
}

export default useInnerWidth;
