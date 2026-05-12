import { notFound } from "next/navigation"

export default async function Page() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  notFound()

  return (
    <div>
      hello page about
    </div>
  )
}