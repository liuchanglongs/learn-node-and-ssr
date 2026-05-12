

/* export default async function Page() {
  return (
    <div>
      hello page list
    </div>
  )
} */

import { connection } from "next/server"

export default async function Page() {
  connection()
  await new Promise(resolve => setTimeout(resolve, 2000))
  return (
    <div>
      hello page list
    </div>
  )
}