import { Scrollbar } from "../../lib/main";
import Example from "./ep";

export function EpVertical1() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "400px" }}>
      <h1>Vertical Scrollbar1</h1>
      <Scrollbar style={{ flex: "1" }}>
        {[...Array(10)].map((_, index) => (
          <Example key={index} />
        ))}
      </Scrollbar>
    </div>
  );
}
