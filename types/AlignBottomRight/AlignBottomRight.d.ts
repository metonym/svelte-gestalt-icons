/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlignBottomRightProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class AlignBottomRight extends SvelteComponentTyped<
  AlignBottomRightProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
