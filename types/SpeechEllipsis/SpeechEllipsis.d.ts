/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SpeechEllipsisProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class SpeechEllipsis extends SvelteComponentTyped<
  SpeechEllipsisProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
