/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextAlignCenterProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class TextAlignCenter extends SvelteComponentTyped<
  TextAlignCenterProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
