import Link from "next/link";

type Iprops = {
  children: React.ReactNode;
};
export default function ProfileLayout({ children }: Iprops) {
  return (
    <div>
      <div>ProfileLayout</div>
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
        <Link href="/cart">
          <button>cart</button>
        </Link>
      </div>
      {children}
    </div>
  );
}
