const context = document.createElement('canvas').getContext('2d');

function getTextWidth(style: CSSStyleDeclaration, text?: string) {
  if (!context) {
    throw new Error('Cannot get canvas context');
  }
  if (!text) {
    return 0;
  }
  context.font = `${style.fontSize} ${style.fontFamily}`;

  return context.measureText(text).width;
}

export default getTextWidth;
