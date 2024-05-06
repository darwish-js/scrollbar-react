/// <reference types="react" />
export interface GlobalScrollbarContextType {
    scrollbarWidth: number;
    scrollbarRadius: number;
    trackColor: string;
    thumbColor: string;
}
export declare const GlobalScrollbarContext: import('react').Context<Partial<GlobalScrollbarContextType>>;
export declare const GlobalScrollbarProvider: (props: React.PropsWithChildren<{
    config: Partial<GlobalScrollbarContextType>;
}>) => import("react/jsx-runtime").JSX.Element;
