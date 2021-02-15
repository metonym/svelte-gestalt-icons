/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FaceSmileyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class FaceSmiley extends SvelteComponentTyped<
  FaceSmileyProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
