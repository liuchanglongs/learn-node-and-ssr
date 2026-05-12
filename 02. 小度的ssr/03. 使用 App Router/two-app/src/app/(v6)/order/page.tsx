import Link from "next/link"
export default function Page() {
  return (
    <div>
      hello order page
      <div>
        <Link href="/login">login</Link>
      </div>
    </div>
  )
}