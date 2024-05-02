import { Scrollbar } from "../../lib/main";
import Example from "./ep";

export default function ExampleHorizontal({ width }: { width: number }) {
  return (
    <Scrollbar
      className="flex"
      contentStyle={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "20px",
      }}
      width={width}
    >
      {[...Array(10)].map((_, index) => (
        <Example key={index} />
      ))}
    </Scrollbar>
  );
}
