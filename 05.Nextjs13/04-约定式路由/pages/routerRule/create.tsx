import { ReactElement } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Create: FC<IProps> = function (props) {
  const { children } = props;
  return <div className="create">create</div>;
};
export default Create;
Create.displayName = "Create"; // 方便以后调试用的
