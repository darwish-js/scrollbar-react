import { Scrollbar } from "../../lib/main";
import Example from "./ep";

export function EpVertical3() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "400px" }}>
      <h1>Vertical Scrollbar3</h1>
      <div style={{ flex: 1, overflow: "hidden" }}>
        <Scrollbar style={{ height: "100%" }}>
          {[...Array(10)].map((_, index) => (
            <Example key={index} />
          ))}
        </Scrollbar>
      </div>
    </div>
  );
}
