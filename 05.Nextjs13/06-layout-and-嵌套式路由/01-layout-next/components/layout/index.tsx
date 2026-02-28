import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
// 自定义的布局组件
const Layout: FC<IProps> = function (props) {
  const { children } = props;
  return (
    <div className="layout">
      <div className="header">header</div>
      {/* 页面的内容 */}
      {children}
      <div className="footer">footer</div>
    </div>
  );
};
export default memo(Layout);
Layout.displayName = "Layout"; // 方便以后调试用的
