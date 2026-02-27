import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Register: FC<IProps> = function (props) {
  const { children } = props;
  return (
    <div className="register">
      <div>Register</div>
    </div>
  );
};
export default memo(Register);
Register.displayName = "Register"; // 方便以后调试用的
