/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SearchProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class Search extends SvelteComponentTyped<
  SearchProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
