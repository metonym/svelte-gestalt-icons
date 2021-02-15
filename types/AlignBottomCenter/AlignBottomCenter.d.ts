/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlignBottomCenterProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class AlignBottomCenter extends SvelteComponentTyped<
  AlignBottomCenterProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
