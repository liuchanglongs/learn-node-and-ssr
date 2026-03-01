import { memo, ReactElement } from "react";
import type { FC } from "react";
import axios from "axios";
import { setCookie, getCookie } from "cookies-next";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Profile: FC<IProps> = memo(function (props) {
  const { children } = props;
  function getUserInfo() {
    // axios.get("/api/user").then((res) => {
    //   console.log(res.data);
    // });
    axios.post("/api/user").then((res) => {
      console.log(res.data);
    });
  }

  function login() {
    axios
      .post("/api/login?id=100", {
        username: "admin",
        password: 123456,
      })
      .then((res) => {
        console.log(res.data);
        setCookie("token", res.data.token, {
          maxAge: 60, // 60 s
        });
      });
  }
  return (
    <div className="profile">
      <div>Profile</div>
      <button onClick={getUserInfo}> getUserInfo </button>
      <button onClick={login}> login </button>
    </div>
  );
});
export default Profile;
Profile.displayName = "Profile"; // 方便以后调试用的
