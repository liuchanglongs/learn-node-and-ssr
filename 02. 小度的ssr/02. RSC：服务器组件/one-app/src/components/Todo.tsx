
// RSC

type Todo = {
  userId: number
  id: number
  title: string
  completed: string
}

export default async function Todo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data: Todo = await response.json()
  return (
    <div>
      { JSON.stringify(data) }
    </div>
  )
}