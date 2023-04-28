import React from 'react';

function useInnerWidth(ref: React.RefObject<HTMLElement>) {
  const [innerWidth, setInnerWidth] = React.useState(0);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    const styles = getComputedStyle(ref.current);
    const newInnerWidth =
      parseFloat(styles.paddingLeft) +
      parseFloat(styles.paddingRight) +
      parseFloat(styles.borderWidth) * 2;

    setInnerWidth(newInnerWidth);
  }, [ref.current]);

  return innerWidth;
}

export default useInnerWidth;
