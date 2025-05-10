import {
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from "react";

/**
 * A utility function that creates a forwardRef component with a display name.
 * @param displayName - The display name for the component.
 * @param render - The render function for the component.
 * @returns A forwardRef component with the provided display name.
 */
function safeForwardRef<T, P = object>(
  displayName: string,
  render: ForwardRefRenderFunction<T, PropsWithoutRef<P>>,
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  const forwarded = forwardRef(render);
  forwarded.displayName = displayName;

  return forwarded;
}

export default safeForwardRef;
