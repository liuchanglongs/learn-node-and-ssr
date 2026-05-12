
/* export default async function Page() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return (
    <div>
      hello page home
    </div>
  )
} */

export default async function Page() {
  const res = await fetch('http://localhost:4000/posts', {
    cache: 'no-store'
  })
  const data = await res.json()
  return (
    <div>
      hello page home
      <p>{ JSON.stringify(data) }</p>
    </div>
  )
}