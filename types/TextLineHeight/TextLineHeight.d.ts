/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextLineHeightProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class TextLineHeight extends SvelteComponentTyped<
  TextLineHeightProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
