import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
}

// 这个是一个:不带有数据的 静态生成 的页面
const About: FC<IProps> = memo(function (props) {
  const { children } = props;
  return (
    <div className="about">
      <div>About</div>
      <div>不带有数据的 静态生成 的页面</div>
    </div>
  );
});
export default About;
About.displayName = "About"; // 方便以后调试用的
