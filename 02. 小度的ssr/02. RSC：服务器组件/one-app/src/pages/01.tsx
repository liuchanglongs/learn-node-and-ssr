
// CSR

import { useState, useEffect } from 'react'

type Todo = {
  userId: number
  id: number
  title: string
  completed: string
}

export default function Page() {
  const [data, setData] = useState<Todo|null>(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then((data: Todo) => setData(data))
  }, [])
  return (
    <div>
      <h2>hello page 01</h2>
      { JSON.stringify(data) }
    </div>
  )
}