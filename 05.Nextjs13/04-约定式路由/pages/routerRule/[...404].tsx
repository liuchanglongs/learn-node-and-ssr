import { ReactElement } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
export interface IProps {
  children?: ReactElement;
  // ...
}
const N404: FC<IProps> = function (props) {
  const { children } = props;
  return <div className="n404">n404</div>;
};
export default N404;
N404.displayName = "N404"; // 方便以后调试用的
