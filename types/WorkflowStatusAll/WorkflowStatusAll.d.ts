/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WorkflowStatusAllProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class WorkflowStatusAll extends SvelteComponentTyped<
  WorkflowStatusAllProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
