import Link from "next/link";
import type { Post } from "@/lib/posts";

export function Post({ post }: { post: Post }) {
  return (
    <li>
      <Link prefetch={false} href={`/blog/${post.slug}`}>
        {post.title}
      </Link>
    </li>
  );
}
