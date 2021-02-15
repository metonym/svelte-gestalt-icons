/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextSizeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class TextSize extends SvelteComponentTyped<
  TextSizeProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
