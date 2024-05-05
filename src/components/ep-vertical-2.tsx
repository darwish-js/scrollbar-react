import { Scrollbar } from "../../lib/main";
import Example from "./ep";

export function EpVertical2() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "400px" }}>
      <h1>Vertical Scrollbar2</h1>
      <Scrollbar height={219}>
        {[...Array(10)].map((_, index) => (
          <Example key={index} />
        ))}
      </Scrollbar>
    </div>
  );
}
