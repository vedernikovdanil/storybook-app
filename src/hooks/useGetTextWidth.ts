import React from 'react';

function useGetTextWidth(ref: React.RefObject<HTMLElement>) {
  const context = React.useMemo(
    () => document.createElement('canvas').getContext('2d'),
    []
  );
  const [styles, setStyles] = React.useState<CSSStyleDeclaration>();

  React.useEffect(() => {
    if (ref.current) {
      setStyles(window.getComputedStyle(ref.current));
    }
  }, [ref.current]);

  return React.useCallback(
    (text: string, withInnerWidth = false) => {
      if (!styles || !context) {
        return -1;
      }
      context.font = `${styles.fontSize} ${styles.fontFamily}`;

      const innerWidth = withInnerWidth
        ? parseFloat(styles.paddingLeft) +
          parseFloat(styles.paddingRight) +
          parseFloat(styles.borderWidth) * 2
        : 0;

      return context.measureText(text).width + innerWidth;
    },
    [styles]
  );
}

export default useGetTextWidth;
