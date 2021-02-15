/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WorkflowStatusOkProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class WorkflowStatusOk extends SvelteComponentTyped<
  WorkflowStatusOkProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
