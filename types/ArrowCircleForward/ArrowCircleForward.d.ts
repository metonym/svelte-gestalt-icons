/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ArrowCircleForwardProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class ArrowCircleForward extends SvelteComponentTyped<
  ArrowCircleForwardProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
