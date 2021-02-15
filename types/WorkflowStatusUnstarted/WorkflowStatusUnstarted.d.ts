/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WorkflowStatusUnstartedProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class WorkflowStatusUnstarted extends SvelteComponentTyped<
  WorkflowStatusUnstartedProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
