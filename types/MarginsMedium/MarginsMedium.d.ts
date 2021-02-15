/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MarginsMediumProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class MarginsMedium extends SvelteComponentTyped<
  MarginsMediumProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
