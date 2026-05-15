
export default async function Page() {
  // const res = await fetch('http://localhost:4000/posts')
  const res = await fetch('http://localhost:3000/api/posts')
  const data = await res.json()
  return (
    <div>
      hello page 04
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

/* 'use client'
import { useState, useEffect } from "react"

export default function Page() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3000/api/posts')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])
  return (
    <div>
      hello page 04 --- client
      <p>{JSON.stringify(data)}</p>
    </div>
  )
} */
