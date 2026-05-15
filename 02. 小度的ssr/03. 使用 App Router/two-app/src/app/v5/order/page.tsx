import Link from "next/link";
export default function Page() {
  return (
    <div>
      hello order page
      <div>
        <Link href="/login">login</Link>
        <br />
        <Link href="/v5/login">v5 login</Link>
      </div>
    </div>
  );
}
