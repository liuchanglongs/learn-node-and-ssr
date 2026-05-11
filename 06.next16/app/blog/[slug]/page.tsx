import { getPost, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const search = await searchParams;
  console.log(search);
  const demoSlow =
    search.demo === "1" ||
    (Array.isArray(search.demo) && search.demo[0] === "1");
  if (demoSlow) {
    await new Promise((r) => setTimeout(r, 2500));
  }
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
