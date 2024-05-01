/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { useEventListener, useSetState } from "@darwish/hooks-core";
import "./scollbar.css";
interface ScrollBarProps {
  height?: number;
  width?: number;
}

export function ScrollBar(props: React.PropsWithChildren<ScrollBarProps>) {
  const scrollRef = React.useRef<React.ElementRef<"div">>(null);
  const [states, setStates] = useSetState({
    verticalTop: 0, // vertical scroll top position
    horizontalLeft: 0, // horizontal scroll left position
  });
  const { children, height, width } = props;

  // @ts-ignore
  useEventListener(scrollRef, "scroll", (e: IEvent) => {
    if (scrollRef.current && height) {
      const h =
        (e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight)) *
        height *
        0.8;

      setStates({ verticalTop: h });
    }
  });

  return (
    <div
      className="dar-scrollbar"
      style={{
        position: "relative",
        width: width,
        height: height,
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
        }}
      >
        {children}
      </div>
      <div
        className=""
        style={{
          position: "absolute",
          height,
          width: "8px",
          top: "0px",
          bottom: "0px",
          right: "0px",
          backgroundColor: "rgba(0,0,0,0.2)",
          borderRadius: "99px",
          // visibility: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            background: "rgba(186, 31, 31, 0.5)",
            borderRadius: "99px",
            cursor: "pointer",
            userSelect: "none",
            width: "100%",
            height: "20%",
            top: states.verticalTop,
          }}
        ></div>
      </div>
    </div>
  );
}
