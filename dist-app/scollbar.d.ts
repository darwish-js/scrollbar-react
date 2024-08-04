import { default as React } from 'react';

export type TagType = React.ElementType | keyof JSX.IntrinsicElements;
type Visibility = React.CSSProperties["visibility"];
type ScrollbarProps<T extends TagType = "div"> = {
    height?: number;
    width?: number;
    supressScrollX?: boolean;
    supressScrollY?: boolean;
    supressAutoHide?: boolean;
    trackStyle?: React.CSSProperties;
    thumbStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    contentClassName?: string;
    as?: T;
} & React.ComponentPropsWithoutRef<T>;
export interface States {
    verticalTop: number;
    horizontalLeft: number;
    visibilityX: Visibility;
    visibilityY: Visibility;
}
export interface ScrollbarRef<T extends TagType = "div"> {
    wrapperRef?: React.RefObject<React.ElementRef<T>>;
    scrollRef?: React.RefObject<HTMLDivElement>;
}
export declare const Scrollbar: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<ScrollbarProps<TagType>>, "ref"> & React.RefAttributes<ScrollbarRef<TagType>>>;
export {};
