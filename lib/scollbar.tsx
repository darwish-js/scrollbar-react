/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef } from "react";
import { useTime } from "./hooks/useTime";
import { useSetState } from "./hooks/useSetState";
import { useEventListener } from "./hooks/useEventListener";
import { useConfig } from "./hooks/useConfig";
import { DEFAULT_CONTEXT } from "./constants";
import { computeOverflow } from "./utils/compute-overflow";
import "./scollbar.css";

type TagType = React.ElementType | keyof JSX.IntrinsicElements;
type Visibility = React.CSSProperties["visibility"];
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

interface States {
  verticalTop: number;
  horizontalLeft: number;
  visibilityX: Visibility;
  visibilityY: Visibility;
}

export function Scrollbar(props: React.PropsWithChildren<ScrollbarProps>) {
  const {
    children,
    height,
    width,
    supressScrollX,
    supressScrollY,
    trackStyle = {},
    thumbStyle = {},
    supressAutoHide = false,
    as: Component = "div",
    contentStyle = {},
    ...restProps
  } = props;
  const { scrollbarWidth, trackColor, thumbColor, scrollbarRadius } =
    useConfig() || DEFAULT_CONTEXT;
  const scrollRef = useRef<React.ElementRef<"div">>(null);
  const timeRef = useRef({
    x: 0,
    y: 0,
  });
  const scrollValRef = useRef({ x: width ?? 0, y: height ?? 0 });
  const lastScrollValRef = useRef({ x: 0, y: 0 });
  const [time, setStartRunTime] = useTime();
  const [states, setStates] = useSetState<States>({
    verticalTop: 0, // vertical scroll top position
    horizontalLeft: 0, // horizontal scroll left position,
    visibilityX: supressScrollX || supressAutoHide ? "visible" : "hidden",
    visibilityY: supressScrollY || supressAutoHide ? "visible" : "hidden",
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollValRef.current = {
        x: width ?? scrollRef.current.clientWidth,
        y: height ?? scrollRef.current.clientHeight,
      };
      lastScrollValRef.current = {
        x: scrollRef.current.scrollLeft,
        y: scrollRef.current.scrollTop,
      };
    }
  }, [scrollRef.current]);

  const thumbHeight = scrollRef.current
    ? (scrollValRef.current.y * scrollValRef.current.y) /
      scrollRef.current.scrollHeight
    : 0;
  const thumbWidth = scrollRef.current
    ? (scrollValRef.current.x * scrollValRef.current.x) /
      scrollRef.current.scrollWidth
    : 0;

  useEventListener(scrollRef, "scroll", (e) => {
    const scrollX = scrollValRef.current.x;
    const scrollY = scrollValRef.current.y;
    const target = e.target as Element;
    setStartRunTime(true);

    const nowDate = new Date().getTime();
    if (target.scrollLeft !== lastScrollValRef.current.x) {
      timeRef.current.x = nowDate;
      setStates({ visibilityX: "visible" });
    }
    if (target.scrollTop !== lastScrollValRef.current.y) {
      timeRef.current.y = nowDate;
      setStates({ visibilityY: "visible" });
    }
    if (scrollRef.current && scrollY) {
      const _thumbHeight = (scrollY * scrollY) / scrollRef.current.scrollHeight;

      const h =
        (target.scrollTop / (target.scrollHeight - target.clientHeight)) *
        (scrollY - _thumbHeight);

      setStates({ verticalTop: h || 0 });
    }
    if (scrollRef.current && scrollX) {
      const _thumbWidth = (scrollX * scrollX) / scrollRef.current.scrollWidth;

      const w =
        (target.scrollLeft / (target.scrollWidth - target.clientWidth)) *
        (scrollX - _thumbWidth);
      setStates({ horizontalLeft: w || 0 });
    }
  });

  useEffect(() => {
    if ((timeRef.current.x || timeRef.current.y) && !supressAutoHide) {
      const diffX = time - timeRef.current.x;
      const diffY = time - timeRef.current.y;
      if (diffX >= 3000) {
        setStates({ visibilityX: "hidden" });
      }
      if (diffY >= 3000) {
        setStates({ visibilityY: "hidden" });
      }
      if (states.visibilityX === "hidden" && states.visibilityY === "hidden") {
        setStartRunTime(false);
      }
    }
  }, [time]);

  return (
    // @ts-ignore
    <Component
      className="dar-scrollbar"
      {...restProps}
      style={{
        position: "relative",
        overflow: "hidden",
        ...restProps.style,
        ...(width !== undefined ? { width } : {}),
        ...(height !== undefined ? { height } : {}),
      }}
    >
      <div
        ref={scrollRef}
        className="dar-scrollbar-content"
        style={{
          width: "100%",
          height: "100%",
          overflowX: computeOverflow(supressScrollX),
          overflowY: computeOverflow(supressScrollY),
          overflowAnchor: "none",
          ...contentStyle,
        }}
      >
        {children}
      </div>
      {supressScrollY !== true ? (
        <div
          className="dar-scrollbar-vertical-track"
          style={{
            position: "absolute",
            height,
            width: scrollbarWidth,
            top: "0px",
            bottom: "0px",
            right: "0px",
            backgroundColor: trackColor,
            borderRadius: scrollbarRadius,
            visibility: states.visibilityY,
            ...trackStyle,
          }}
        >
          <div
            className="dar-scrollbar-vertical-thumb"
            style={{
              position: "absolute",
              backgroundColor: thumbColor,
              borderRadius: scrollbarWidth,
              cursor: "pointer",
              userSelect: "none",
              width: "100%",
              height: `${thumbHeight}px`,
              top: `${states.verticalTop}px`,
              ...thumbStyle,
            }}
          />
        </div>
      ) : null}
      {supressScrollX !== true ? (
        <div
          className="dar-scrollbar-horizontal-track"
          style={{
            position: "absolute",
            width,
            height: scrollbarWidth,
            left: "0px",
            right: "0px",
            bottom: "0px",
            backgroundColor: trackColor,
            borderRadius: scrollbarRadius,
            visibility: states.visibilityX,
            ...trackStyle,
          }}
        >
          <div
            className="dar-scrollbar-horizontal-thumb"
            style={{
              position: "absolute",
              backgroundColor: thumbColor,
              borderRadius: scrollbarRadius,
              cursor: "pointer",
              userSelect: "none",
              height: "100%",
              width: `${thumbWidth}px`,
              left: `${states.horizontalLeft}px`,
              ...thumbStyle,
            }}
          />
        </div>
      ) : null}
    </Component>
  );
}
