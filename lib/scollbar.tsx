import { useEffect, useRef } from "react";
import { useEventListener, useSetState } from "@darwish/hooks-core";
import "./scollbar.css";
import { useTime } from "./hooks/useTime";

type TagType = React.ElementType | keyof JSX.IntrinsicElements;
type ScrollBarProps<T extends TagType = "div" | keyof JSX.IntrinsicElements> = {
  height?: number;
  width?: number;
  trackStyle?: React.CSSProperties;
  thumbStyle?: React.CSSProperties;
  supressAutoHide?: boolean;
  as?: T;
  supressScrollX?: boolean;
  supressScrollY?: boolean;
  contentStyle?: React.CSSProperties;
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
  const scrollRef = useRef<React.ElementRef<"div">>(null);
  const timeRef = useRef<number>(0);
  const time = useTime();
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
      if (diff > 3000) {
        setStates({ visibility: "hidden" });
      }
    }
  }, [time]);

  return (
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
            width: "8px",
            top: "0px",
            bottom: "0px",
            right: "0px",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderRadius: "99px",
            visibility: states.visibility,
            ...trackStyle,
          }}
        >
          <div
            className="dar-scrollbar-vertical-thumb"
            style={{
              position: "absolute",
              backgroundColor: "rgba(186, 31, 31, 0.5)",
              borderRadius: "99px",
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
            height: "8px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderRadius: "99px",
            visibility: states.visibility,
            ...trackStyle,
          }}
        >
          <div
            className="dar-scrollbar-horizontal-thumb"
            style={{
              position: "absolute",
              backgroundColor: "rgba(186, 31, 31, 0.5)",
              borderRadius: "99px",
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
