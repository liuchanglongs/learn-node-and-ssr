/* export default async function Page() {
  return (
    <div>
      hello page movie
    </div>
  )
} */

export default async function Page({ params }: { params: Promise<{param: string[]}> }) {
  const { param } = await params
  return (
    <div>
      hello page movie, { JSON.stringify(param) }
    </div>
  )
}