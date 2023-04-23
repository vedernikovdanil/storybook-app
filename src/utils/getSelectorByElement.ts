function getSelectorByElement(el: HTMLElement) {
  return `${el.tagName.toLowerCase()}.${Array.from(el.classList).join('.')}`;
}

export default getSelectorByElement;
