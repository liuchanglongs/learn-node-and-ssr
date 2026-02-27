import { ReactElement } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
export interface IProps {
  children?: ReactElement;
  // ...
}
const NotFound: FC<IProps> = function (props) {
  const { children } = props;
  const routes = useRouter();
  console.log("404", routes.query);
  return <div className="notFound">notFound</div>;
};
export default NotFound;
NotFound.displayName = "NotFound"; // 方便以后调试用的
