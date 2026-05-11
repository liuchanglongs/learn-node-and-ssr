import { getPosts } from "@/lib/posts";
import { Post } from "@/ui/post";
import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Blog</h1>
      <p>
        <Link prefetch={false} href="/blog/first-post?demo=1">
          慢速演示（约 2.5s）：点我后应先看到 loading.tsx，再出现正文
        </Link>
      </p>
      <a href="/blog/first-post">Blog 1</a>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
