import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const More: FC<IProps> = memo(function (props) {
  const { children } = props;
  return (
    <div className="more">
      <div>More</div>
    </div>
  );
});
export default More;
More.displayName = "More"; // 方便以后调试用的
