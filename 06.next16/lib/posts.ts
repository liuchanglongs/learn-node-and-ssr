export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
};

const posts: Post[] = [
  {
    id: "1",
    title: "First post",
    slug: "first-post",
    content: "Content for the first post.",
  },
  {
    id: "2",
    title: "Second post",
    slug: "second-post",
    content: "Content for the second post.",
  },
];

export async function getPosts(): Promise<Post[]> {
  return posts;
}

export async function getPost(slug: string): Promise<Post | null> {
  const ms = Number(process.env.SLOW_POST_MS);
  if (Number.isFinite(ms) && ms > 0) {
    await new Promise((r) => setTimeout(r, ms));
  }
  return posts.find((p) => p.slug === slug) ?? null;
}
