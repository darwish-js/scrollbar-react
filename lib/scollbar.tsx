/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import "./scollbar.css";
interface ScrollBarProps {
  height?: number;
  width?: number;
}

export function ScrollBar(props: React.PropsWithChildren<ScrollBarProps>) {
  const scrollRef = React.useRef<React.ElementRef<"div">>(null);
  const [verticalTop, setVerticalTop] = React.useState(0);
  const { children, height, width } = props;
  // useEffect(() => {

  // }, [scrollRef, verticalTop])

  useEffect(() => {
    scrollRef.current?.addEventListener("scroll", (e: Record<string, any>) => {
      if (scrollRef.current && height) {
        console.log("scrollHeight", e.target.clientHeight);
        console.log("scrollTop", e.target.scrollTop);
        console.dir(e.target);

        const h =
          (e.target.scrollTop /
            (e.target.scrollHeight - e.target.clientHeight)) *
          height *
          0.8;

        setVerticalTop(h);
      }
    });
  }, [scrollRef.current, height]);

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
            top: verticalTop,
          }}
        ></div>
      </div>
    </div>
  );
}
