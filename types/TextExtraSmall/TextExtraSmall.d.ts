/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextExtraSmallProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class TextExtraSmall extends SvelteComponentTyped<
  TextExtraSmallProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
