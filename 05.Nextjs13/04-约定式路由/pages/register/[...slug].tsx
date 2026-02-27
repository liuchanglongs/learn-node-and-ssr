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
  console.log("slug", routes.query);

  return (
    <div className="notFound">
      register slug: {JSON.stringify(routes.query)}
    </div>
  );
};
export default NotFound;
NotFound.displayName = "NotFound"; // 方便以后调试用的
