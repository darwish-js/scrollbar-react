import { Scrollbar } from "../../lib/main";
import Example from "./ep";

interface ExampleHorizontalProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
}
export default function ExampleHorizontal(props: ExampleHorizontalProps) {
  const { width, ...restProps } = props;
  return (
    <Scrollbar
      width={width}
      className="flex"
      contentStyle={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "20px",
      }}
      {...restProps}
    >
      {[...Array(10)].map((_, index) => (
        <Example key={index} />
      ))}
    </Scrollbar>
  );
}
