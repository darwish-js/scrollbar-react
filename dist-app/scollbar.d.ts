/// <reference types="react" />
type TagType = React.ElementType | keyof JSX.IntrinsicElements;
type ScrollbarProps<T extends TagType = "div" | keyof JSX.IntrinsicElements> = {
    height?: number;
    width?: number;
    supressScrollX?: boolean;
    supressScrollY?: boolean;
    supressAutoHide?: boolean;
    trackStyle?: React.CSSProperties;
    thumbStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    as?: T;
} & React.ComponentPropsWithoutRef<T>;
export declare function Scrollbar(props: React.PropsWithChildren<ScrollbarProps>): import("react/jsx-runtime").JSX.Element;
export {};
