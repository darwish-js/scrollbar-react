import { Scrollbar } from "../../lib/main";
import Example from "./ep";

export function EpHorizontal1() {
  return (
    <div style={{ width: "100%" }}>
      <h1>Horizontal Scrollbar1</h1>
      <Scrollbar width={300} contentStyle={{ display: "flex" }}>
        {[...Array(10)].map((_, index) => (
          <Example key={index} />
        ))}
      </Scrollbar>
    </div>
  );
}
