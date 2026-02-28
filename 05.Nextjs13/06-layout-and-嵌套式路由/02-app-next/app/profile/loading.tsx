import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Loading: FC<IProps> = memo(function (props) {
  const { children } = props;
  return (
    <div className="loading">
      <h2>Loading .....</h2>
    </div>
  );
});
export default Loading;
Loading.displayName = "Loading"; // 方便以后调试用的
