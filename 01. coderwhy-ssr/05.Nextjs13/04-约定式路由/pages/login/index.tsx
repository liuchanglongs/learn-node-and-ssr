import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Login: FC<IProps> = function (props) {
  const { children } = props;
  return (
    <div className="login">
      <div>Login</div>
    </div>
  );
};
export default Login;
Login.displayName = "Login"; // 方便以后调试用的
