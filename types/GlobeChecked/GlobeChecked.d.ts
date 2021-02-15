/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GlobeCheckedProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class GlobeChecked extends SvelteComponentTyped<
  GlobeCheckedProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
