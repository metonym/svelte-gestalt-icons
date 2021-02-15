/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlignBottomLeftProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class AlignBottomLeft extends SvelteComponentTyped<
  AlignBottomLeftProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
