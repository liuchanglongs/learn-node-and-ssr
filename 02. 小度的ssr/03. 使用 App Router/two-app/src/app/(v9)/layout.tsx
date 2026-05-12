
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: {
    default: 'blog',
    template: '%s | blog'
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      { children }
    </div>
  )
}