import { Scrollbar } from "../../lib/main";
import Example from "./ep-more";

export function EpHorizontal3() {
  return (
    <div style={{ width: "100%" }}>
      <h1>Horizontal And Veritical</h1>
      <Scrollbar width={300} height={218} contentStyle={{ display: "flex" }}>
        {[...Array(10)].map((_, index) => (
          <Example key={index} />
        ))}
      </Scrollbar>
    </div>
  );
}
