

// SSR

type Todo = {
  userId: number
  id: number
  title: string
  completed: string
}

export default function Page({ data }: { data: Todo }) {
  return (
    <div>
      <h2>hello page 02</h2>
      { JSON.stringify(data) }
    </div>
  )
}

// 服务端获取数据
export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data: Todo = await response.json()
  return { props: { data } }
}