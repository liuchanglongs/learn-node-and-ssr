'use client'

import { useState } from 'react'

export default function Page() {  // RCC 客户端组件
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>hello page 05</h2>
      <button onClick={ () => setCount(count + 1) }>点击</button> { count }
    </div>
  )
}
