import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Category: FC<IProps> = function (props) {
  const { children } = props;
  return (
    <div className="category">
      <div>Category</div>
    </div>
  );
};
export default memo(Category);
Category.displayName = "Category"; // 方便以后调试用的
