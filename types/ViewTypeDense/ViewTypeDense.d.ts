/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ViewTypeDenseProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class ViewTypeDense extends SvelteComponentTyped<
  ViewTypeDenseProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
