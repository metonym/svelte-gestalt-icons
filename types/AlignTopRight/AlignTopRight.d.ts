/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlignTopRightProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class AlignTopRight extends SvelteComponentTyped<
  AlignTopRightProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
