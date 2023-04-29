function getInnerWidth(style: CSSStyleDeclaration) {
  return (
    parseFloat(style.paddingLeft) +
    parseFloat(style.paddingRight) +
    parseFloat(style.borderWidth) * 2
  );
}

export default getInnerWidth;
