/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextAlignLeftProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class TextAlignLeft extends SvelteComponentTyped<
  TextAlignLeftProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
