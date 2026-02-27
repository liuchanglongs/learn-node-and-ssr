import { ReactElement } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Params: FC<IProps> = function (props) {
  const { children } = props;
  return <div className="params">params</div>;
};
export default Params;
Params.displayName = "Params"; // 方便以后调试用的
