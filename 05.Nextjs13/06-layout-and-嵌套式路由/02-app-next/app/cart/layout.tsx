import Link from "next/link";

type Iprops = {
  children: React.ReactNode;
};
export default function CartLayout({ children }: Iprops) {
  return (
    <div>
      <div>CartLayout</div>
      <Link href="/cart/more">more</Link>
      {children}
    </div>
  );
}
