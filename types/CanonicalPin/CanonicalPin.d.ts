/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CanonicalPinProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class CanonicalPin extends SvelteComponentTyped<
  CanonicalPinProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
