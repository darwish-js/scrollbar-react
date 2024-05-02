/**
 * @description
 * @param initialValue The initial state of the component
 * @returns A tuple with two elements
 * @module hooks/core/useSetState
 * @see
 */
export declare function useSetState<T extends Record<PropertyKey, any> | (() => Record<PropertyKey, any>)>(initialValue: T): readonly [T, (updateValue: Partial<T> | ((args: T) => Partial<T>)) => void];
