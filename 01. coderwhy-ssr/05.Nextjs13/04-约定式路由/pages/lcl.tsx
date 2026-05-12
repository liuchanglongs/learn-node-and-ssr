import { ReactElement } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Lcl: FC<IProps> = function (props) {
  const { children } = props;
  return <div className="lcl">lcl</div>;
};
export default Lcl;
Lcl.displayName = "Lcl"; // 方便以后调试用的
