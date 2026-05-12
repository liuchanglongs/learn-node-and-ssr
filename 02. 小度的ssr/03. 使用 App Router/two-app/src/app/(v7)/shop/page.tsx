/* "use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/list')
  }
  return (
    <div>
      hello shop page
      <div>
        <Link href="/list">list ---- link</Link>
      </div>
      <div>
        <button onClick={handleClick}>list ---- useRouter</button>
      </div>
    </div>
  )
} */

/* "use client"
import { useSearchParams, usePathname } from "next/navigation"

export default function Page() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const handleClick = () => {
    // console.log( searchParams.toString() )
    console.log( searchParams.get('type') )
    const params = new URLSearchParams(searchParams.toString())
    params.set('type', 'drink')
    window.history.pushState(null, '', `${pathname}?${params.toString()}`)
  }
  return (
    <div>
      hello shop page
      <div>
        <button onClick={handleClick}>更新URL参数</button>
      </div>
    </div>
  )
} */


import Link from "next/link"

export default function Page() {
  return (
    <div>
      hello shop page
      <div>
        <Link href="/list" prefetch>list ---- prefetch</Link>
      </div>
    </div>
  )
}