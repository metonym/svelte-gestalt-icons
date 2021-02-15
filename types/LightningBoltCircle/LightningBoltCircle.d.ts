/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LightningBoltCircleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class LightningBoltCircle extends SvelteComponentTyped<
  LightningBoltCircleProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
