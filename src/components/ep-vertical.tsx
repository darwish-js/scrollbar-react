import { Scrollbar } from "../../lib/main";
import Example from "./ep";

export default function ExampleVertical() {
  return (
    <Scrollbar height={500}>
      {[...Array(10)].map((_, index) => (
        <Example key={index} />
      ))}
    </Scrollbar>
  );
}
