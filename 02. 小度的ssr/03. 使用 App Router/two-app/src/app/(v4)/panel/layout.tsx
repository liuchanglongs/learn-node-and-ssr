import Link from "next/link";
export default function Layout(props: {
  children: React.ReactNode;
  card: React.ReactNode;
  menu: React.ReactNode;
}) {
  const { children, card, menu } = props;
  console.log("props", props);

  return (
    <div>
      panel layout
      <div>
        跳转 <Link href="/panel/info">go to info</Link>
      </div>
      <hr />
      <ul className="m-5">
        <li>{children}</li>
        <li>{card}</li>
        <li>{menu}</li>
      </ul>
    </div>
  );
}
