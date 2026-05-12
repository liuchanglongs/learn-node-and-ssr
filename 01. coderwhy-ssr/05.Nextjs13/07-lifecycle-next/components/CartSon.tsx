import { Component, ReactNode } from "react";

class CartSon extends Component {
  constructor(props: any) {
    super(props);
    console.log("CartSon constructor");
  }

  UNSAFE_componentWillMount(): void {
    console.log("CartSon UNSAFE_componentWillMount");
  }

  componentDidMount(): void {
    console.log("CartSon componentDidMount");
  }

  componentWillUnmount(): void {
    console.log("CartSon componentWillUnmount");
  }

  render(): ReactNode {
    console.log(" CartSon render");
    return (
      <div>
        <div>CartSon Page</div>
      </div>
    );
  }
}
export default CartSon;
