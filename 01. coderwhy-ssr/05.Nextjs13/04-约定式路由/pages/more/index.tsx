import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const More: FC<IProps> = function (props) {
  const { children } = props;
  return (
    <div className="more">
      <div>More</div>
    </div>
  );
};
export default memo(More);
More.displayName = "More"; // 方便以后调试用的
