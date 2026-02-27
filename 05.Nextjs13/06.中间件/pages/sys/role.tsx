import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Role: FC<IProps> = function (props) {
  const { children } = props;
  return (
    <div className="role">
      <div>Role</div>
    </div>
  );
};
export default memo(Role);
Role.displayName = "Role"; // 方便以后调试用的
