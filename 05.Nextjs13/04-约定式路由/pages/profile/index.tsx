import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Profile: FC<IProps> = function (props) {
  const { children } = props;
  return (
    <div className="profile">
      <div>Profile</div>
    </div>
  );
};
export default memo(Profile);
Profile.displayName = "Profile"; // 方便以后调试用的
