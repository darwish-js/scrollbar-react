/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef } from "react";
import { useEventListener, useSetState } from "@darwish/hooks-core";
import "./scollbar.css";
import { useTime } from "./hooks/useTime";
interface ScrollBarProps {
  height?: number;
  width?: number;
}
interface States {
  visibility: React.CSSProperties["visibility"];
  verticalTop: number;
  horizontalLeft: number;
}

export function ScrollBar(props: React.PropsWithChildren<ScrollBarProps>) {
  const scrollRef = useRef<React.ElementRef<"div">>(null);
  const timeRef = useRef<number>(0);
  const time = useTime();
  const [states, setStates] = useSetState<States>({
    verticalTop: 0, // vertical scroll top position
    horizontalLeft: 0, // horizontal scroll left position,
    visibility: "hidden",
  });
  const { children, height, width } = props;

  // @ts-ignore
  useEventListener(scrollRef, "scroll", (e: IEvent) => {
    setStates({ visibility: "visible" });
    timeRef.current = new Date().getTime();
    if (scrollRef.current && height) {
      const h =
        (e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight)) *
        height *
        0.8;

      setStates({ verticalTop: h });
    }
  });

  useEffect(() => {
    if (timeRef.current) {
      const diff = time - timeRef.current;
      if (diff > 3000) {
        setStates({ visibility: "hidden" });
      }
    }
  }, [time]);

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
          visibility: states.visibility,
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
