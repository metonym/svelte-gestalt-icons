/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ArrowCircleDownProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class ArrowCircleDown extends SvelteComponentTyped<
  ArrowCircleDownProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
