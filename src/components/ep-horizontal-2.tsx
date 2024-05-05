import { Scrollbar } from "../../lib/main";
import Example from "./ep";

export function EpHorizontal2() {
  return (
    <div style={{ display: "flex", width: "300px" }}>
      <h1
        style={{
          writingMode: "vertical-rl",
        }}
      >
        Horizontal Scrollbar2
      </h1>
      <div style={{ flex: 1, overflow: "hidden" }}>
        <Scrollbar style={{ width: "100%" }} contentStyle={{ display: "flex" }}>
          {[...Array(10)].map((_, index) => (
            <Example key={index} />
          ))}
        </Scrollbar>
      </div>
    </div>
  );
}
