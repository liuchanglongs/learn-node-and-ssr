
export default async function Page() {
  // const res = await fetch('http://localhost:3000/api/posts?city=bj')
  const res = await fetch('http://localhost:3000/api/posts', {
    method: 'POST',
    body: JSON.stringify({ city: 'sh' })
  })
  const data = await res.json()
  return (
    <div>
      hello page 03
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
