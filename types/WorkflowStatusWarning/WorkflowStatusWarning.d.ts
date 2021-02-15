/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WorkflowStatusWarningProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {}

export default class WorkflowStatusWarning extends SvelteComponentTyped<
  WorkflowStatusWarningProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    keydown: WindowEventMap["keydown"];
  },
  { default: {} }
> {}
