/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef } from "react";
import { useTime } from "./hooks/useTime";
import { useSetState } from "./hooks/useSetState";
import { useEventListener } from "./hooks/useEventListener";
import "./scollbar.css";
import { useConfig } from "./hooks/useConfig";
import { DEFAULT_CONTEXT } from "./constants";

type TagType = React.ElementType | keyof JSX.IntrinsicElements;
type ScrollBarProps<T extends TagType = "div" | keyof JSX.IntrinsicElements> = {
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
  visibility: React.CSSProperties["visibility"];
  verticalTop: number;
  horizontalLeft: number;
}

export function ScrollBar(props: React.PropsWithChildren<ScrollBarProps>) {
  const {
    children,
    height,
    width,
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
  const timeRef = useRef<number>(0);
  const [time, setStartRunTime] = useTime();
  const [states, setStates] = useSetState<States>({
    verticalTop: 0, // vertical scroll top position
    horizontalLeft: 0, // horizontal scroll left position,
    visibility: supressAutoHide ? "visible" : "hidden",
  });

  const thumbHeight =
    scrollRef.current && height
      ? (height * height) / scrollRef.current.scrollHeight
      : 0;
  const thumbWidth =
    scrollRef.current && width
      ? (width * width) / scrollRef.current.scrollWidth
      : 0;

  useEventListener(scrollRef, "scroll", (e) => {
    const target = e.target as Element;
    setStartRunTime(true);
    if (!supressAutoHide) {
      setStates({ visibility: "visible" });
    }
    timeRef.current = new Date().getTime();
    if (scrollRef.current && height) {
      const _thumbHeight = (height * height) / scrollRef.current.scrollHeight;

      const h =
        (target.scrollTop / (target.scrollHeight - target.clientHeight)) *
        (height - _thumbHeight);

      setStates({ verticalTop: h });
    }
    if (scrollRef.current && width) {
      const _thumbWidth = (width * width) / scrollRef.current.scrollWidth;

      const w =
        (target.scrollLeft / (target.scrollWidth - target.clientWidth)) *
        (width - _thumbWidth);

      setStates({ horizontalLeft: w });
    }
  });

  useEffect(() => {
    if (timeRef.current && !supressAutoHide) {
      const diff = time - timeRef.current;
      if (diff >= 3000) {
        setStates({ visibility: "hidden" });
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
        width: width,
        height: height,
        ...restProps.style,
      }}
    >
      <div
        ref={scrollRef}
        className="dar-scrollbar-content"
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          overflowAnchor: "none",
          ...contentStyle,
        }}
      >
        {children}
      </div>
      {height ? (
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
            visibility: states.visibility,
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
              top: states.verticalTop,
              ...thumbStyle,
            }}
          />
        </div>
      ) : null}
      {width ? (
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
            visibility: states.visibility,
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
              left: states.horizontalLeft,
              ...thumbStyle,
            }}
          />
        </div>
      ) : null}
    </Component>
  );
}
