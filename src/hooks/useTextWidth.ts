import React from 'react';

function useTextWidth(ref: React.RefObject<HTMLElement>, text?: string) {
  const [styles, setStyles] = React.useState<CSSStyleDeclaration | null>();

  const context = React.useMemo(() => {
    const context = document.createElement('canvas').getContext('2d');
    if (!styles || !context) {
      return null;
    }
    context.font = `${styles.fontSize} ${styles.fontFamily}`;

    return context;
  }, [styles]);

  React.useEffect(() => {
    setStyles(ref.current ? getComputedStyle(ref.current) : null);
  }, [ref.current]);

  return React.useMemo(
    () => (text && context ? context.measureText(text).width : null),
    [text, context]
  );
}

export default useTextWidth;
