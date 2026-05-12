import { memo, ReactElement } from "react";
import type { FC } from "react";
import Link from "next/link";
export interface IProps {
  children?: ReactElement;
  // ...
}
// 也是一个自定义的布局, 但是作为嵌套布局使用, 嵌套在layout布局中
const NestLayout: FC<IProps> = function (props) {
  const { children } = props;
  return (
    <div className="nest-layout">
      <div>NestLayout</div>
      <div>
        <Link href="/profile">
          <button>profile</button>
        </Link>
        <Link href="/profile/login">
          <button>login</button>
        </Link>
        <Link href="/profile/register">
          <button>register</button>
        </Link>
      </div>
      {children}
    </div>
  );
};
export default memo(NestLayout);
NestLayout.displayName = "NestLayout"; // 方便以后调试用的
