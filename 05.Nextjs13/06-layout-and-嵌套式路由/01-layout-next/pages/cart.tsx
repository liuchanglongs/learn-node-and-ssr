import { memo, ReactElement } from "react";
import type { FC } from "react";
import Layout from "../components/layout";
export interface IProps {
  children?: ReactElement;
  // ...
}
export interface IStaticProps {
  getLayout?: (page: ReactElement) => ReactElement;
}

const Cart: FC<IProps> & IStaticProps = function (props) {
  const { children } = props;
  return (
    <div className="cart">
      <div>Cart</div>
    </div>
  );
};
export default Cart;
Cart.displayName = "Cart"; // 方便以后调试用的
Cart.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
