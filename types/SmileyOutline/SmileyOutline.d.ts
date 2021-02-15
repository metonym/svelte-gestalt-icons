/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SmileyOutlineProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class SmileyOutline extends SvelteComponentTyped<
  SmileyOutlineProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
