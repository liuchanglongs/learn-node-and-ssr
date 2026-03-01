import { memo, ReactElement, useEffect } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const ProfileSon: FC<IProps> = memo(function (props) {
  const { children } = props;
  console.log("ProfileSon function body");

  useEffect(() => {
    console.log("ProfileSon useEffect");
    return () => {
      console.log("ProfileSon unmounted useEffect");
    };
  }, []);

  return (
    <div className="ProfileSon">
      <div>ProfileSon</div>
    </div>
  );
});
export default ProfileSon;
ProfileSon.displayName = "ProfileSon"; // 方便以后调试用的
