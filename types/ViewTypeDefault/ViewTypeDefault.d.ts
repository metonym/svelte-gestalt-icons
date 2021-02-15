/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ViewTypeDefaultProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class ViewTypeDefault extends SvelteComponentTyped<
  ViewTypeDefaultProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
