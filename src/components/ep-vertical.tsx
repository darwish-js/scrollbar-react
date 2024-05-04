import { Scrollbar } from "../../lib/main";
import Example from "./ep";

interface ExampleVerticalProps extends React.HTMLAttributes<HTMLDivElement> {
  heihgt?: number;
}
export default function ExampleVertical(props: ExampleVerticalProps) {
  const { heihgt, ...restProps } = props;

  return (
    <Scrollbar height={heihgt} {...restProps}>
      {[...Array(10)].map((_, index) => (
        <Example key={index} />
      ))}
    </Scrollbar>
  );
}
