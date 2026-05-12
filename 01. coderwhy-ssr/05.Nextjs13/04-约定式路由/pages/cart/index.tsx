import { ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Cart: FC<IProps> = function (props) {
  const { children } = props;
  return (
    <div className="cart">
      <div>Cart</div>
    </div>
  );
};
export default Cart;
Cart.displayName = "Cart"; // 方便以后调试用的
