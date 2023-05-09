// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".tippy-box[data-animation=shift-away-subtle][data-state=hidden]{opacity:0}.tippy-box[data-animation=shift-away-subtle][data-state=hidden][data-placement^=top]{transform:translateY(5px)}.tippy-box[data-animation=shift-away-subtle][data-state=hidden][data-placement^=bottom]{transform:translateY(-5px)}.tippy-box[data-animation=shift-away-subtle][data-state=hidden][data-placement^=left]{transform:translateX(5px)}.tippy-box[data-animation=shift-away-subtle][data-state=hidden][data-placement^=right]{transform:translateX(-5px)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}