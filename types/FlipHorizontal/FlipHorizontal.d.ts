/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FlipHorizontalProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class FlipHorizontal extends SvelteComponentTyped<
  FlipHorizontalProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
