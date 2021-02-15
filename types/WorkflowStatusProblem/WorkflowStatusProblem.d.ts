/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WorkflowStatusProblemProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class WorkflowStatusProblem extends SvelteComponentTyped<
  WorkflowStatusProblemProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
