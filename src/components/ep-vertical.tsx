import { ScrollBar } from "../../lib/main";
import Example from "./ep";

export default function ExampleVertical() {
  return (
    <ScrollBar height={500}>
      {[...Array(10)].map((_, index) => (
        <Example key={index} />
      ))}
    </ScrollBar>
  );
}
