/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SwitchAccountProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class SwitchAccount extends SvelteComponentTyped<
  SwitchAccountProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
