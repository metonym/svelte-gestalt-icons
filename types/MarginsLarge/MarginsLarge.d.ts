/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MarginsLargeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class MarginsLarge extends SvelteComponentTyped<
  MarginsLargeProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
