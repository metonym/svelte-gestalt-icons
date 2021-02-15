/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ArrowCircleUpProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class ArrowCircleUp extends SvelteComponentTyped<
  ArrowCircleUpProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
