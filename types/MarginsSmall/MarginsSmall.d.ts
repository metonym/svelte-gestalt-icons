/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MarginsSmallProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class MarginsSmall extends SvelteComponentTyped<
  MarginsSmallProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
