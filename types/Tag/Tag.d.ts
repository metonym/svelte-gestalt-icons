/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TagProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class Tag extends SvelteComponentTyped<
  TagProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
