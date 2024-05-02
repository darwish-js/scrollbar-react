/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

/**
 *
 * @param name
 * @param event
 * @param callback
 * @param options
 */
export function useEventListener<
  K extends keyof HTMLElementEventMap,
  U extends React.ElementRef<any>
>(
  name: React.RefObject<U>,
  event: K,
  callback: (this: U, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<K extends keyof WindowEventMap>(
  name: Window,
  event: K,
  callback: (this: Window, ev: WindowEventMap[K]) => any,
  option?: boolean | AddEventListenerOptions
): void;

export function useEventListener<
  K extends keyof WindowEventMap & keyof HTMLElementEventMap,
  U extends React.ElementRef<React.ElementType>
>(
  name: Window | React.RefObject<U>,
  event: K,
  callback: (
    this: Window,
    ev: WindowEventMap[K]
  ) => any | ((this: U, ev: HTMLElementEventMap[K]) => any),
  options?: boolean | AddEventListenerOptions
): void {
  useEffect(() => {
    if (name === window) {
      name.addEventListener(event, callback, options);
      return () => name.removeEventListener(event, callback, options);
    } else if (name && "current" in name && name.current) {
      // @ts-ignore
      name.current.addEventListener(event, callback, options);
      return () => {
        if (name && "current" in name && name.current) {
          // @ts-ignore
          name.current.removeEventListener(event, callback, options);
        }
      };
    }
  }, [name]);
}
