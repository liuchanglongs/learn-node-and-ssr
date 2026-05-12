import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
const Login: FC<IProps> = function (props) {
  const { children } = props;
  const routes = useRouter();
  function login() {
    setCookie("token", "aabbcc", {
      maxAge: 10,
    });
    routes.push("/sys/user");
  }
  return (
    <div className="login">
      <div>Login</div>
      <button onClick={login}>login</button>
    </div>
  );
};
export default memo(Login);
Login.displayName = "Login"; // 方便以后调试用的
