import { useEffect, useRef } from "react";
import { Scrollbar, ScrollbarRef, TagType } from "../../lib/main";
import Example from "./ep";

export function EpVertical1() {
  const ref = useRef<ScrollbarRef<TagType>>(null);

  useEffect(() => {
    console.log("ref", ref.current);
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "400px" }}>
      <h1>Vertical Scrollbar1</h1>
      <Scrollbar style={{ flex: "1" }} ref={ref}>
        {[...Array(10)].map((_, index) => (
          <Example key={index} />
        ))}
      </Scrollbar>
    </div>
  );
}
