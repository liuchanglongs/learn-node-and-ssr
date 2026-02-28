import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Profile: FC<IProps> = memo(function (props) {
  const { children } = props;
  return (
    <div className="profile">
      <div>Profile</div>
    </div>
  );
});
export default Profile;
Profile.displayName = "Profile"; // 方便以后调试用的
