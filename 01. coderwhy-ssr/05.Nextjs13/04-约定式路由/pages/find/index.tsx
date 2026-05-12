import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Find: FC<IProps> = function (props) {
  const { children } = props;
  return (
    <div className="find">
      <div>Find</div>
    </div>
  );
};
export default Find;
Find.displayName = "Find"; // 方便以后调试用的
