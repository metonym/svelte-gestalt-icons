/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextSentenceCaseProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class TextSentenceCase extends SvelteComponentTyped<
  TextSentenceCaseProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
