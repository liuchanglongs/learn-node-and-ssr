import Link from "next/link";
export default function Layout({ children, card, menu }: { children: React.ReactNode; card: React.ReactNode; menu: React.ReactNode }) {
  return (
    <div>
      panel layout
      <div>
        <Link href="/panel/info">go to info</Link>
      </div>
      <hr />
      <ul className="m-5">
        <li>{children}</li>
        <li>{card}</li>
        <li>{menu}</li>
      </ul> 
    </div>
  )
}