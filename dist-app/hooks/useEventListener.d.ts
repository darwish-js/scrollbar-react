/// <reference types="react" />
export declare function useEventListener<K extends keyof HTMLElementEventMap, U extends React.ElementRef<any>>(name: React.RefObject<U>, event: K, callback: (this: U, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
export declare function useEventListener<K extends keyof WindowEventMap>(name: Window, event: K, callback: (this: Window, ev: WindowEventMap[K]) => any, option?: boolean | AddEventListenerOptions): void;
