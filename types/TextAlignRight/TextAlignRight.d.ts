/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextAlignRightProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class TextAlignRight extends SvelteComponentTyped<
  TextAlignRightProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
