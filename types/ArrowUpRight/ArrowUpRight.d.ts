/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ArrowUpRightProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class ArrowUpRight extends SvelteComponentTyped<
  ArrowUpRightProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
