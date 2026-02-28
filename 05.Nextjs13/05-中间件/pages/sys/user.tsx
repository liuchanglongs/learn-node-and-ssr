import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const User: FC<IProps> = function (props) {
  const { children } = props;
  return (
    <div className="user">
      <div>User</div>
    </div>
  );
};
export default memo(User);
User.displayName = "User"; // 方便以后调试用的
