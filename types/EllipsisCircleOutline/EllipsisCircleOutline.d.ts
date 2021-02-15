/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EllipsisCircleOutlineProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class EllipsisCircleOutline extends SvelteComponentTyped<
  EllipsisCircleOutlineProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
