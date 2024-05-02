/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";

/**
 * @description
 * @param initialValue The initial state of the component
 * @returns A tuple with two elements
 * @module hooks/core/useSetState
 * @see
 */
export function useSetState<
  T extends Record<PropertyKey, any> | (() => Record<PropertyKey, any>)
>(initialValue: T) {
  const [state, setState] = useState<T>(initialValue);

  const update = useCallback(
    (updateValue: Partial<T> | ((args: T) => Partial<T>)) => {
      setState((prevState) => ({
        ...prevState,
        ...(typeof updateValue === "function"
          ? updateValue(prevState)
          : updateValue),
      }));
    },
    []
  );

  return [state, update] as const;
}
