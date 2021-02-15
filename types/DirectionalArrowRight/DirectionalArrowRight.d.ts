/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DirectionalArrowRightProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class DirectionalArrowRight extends SvelteComponentTyped<
  DirectionalArrowRightProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
