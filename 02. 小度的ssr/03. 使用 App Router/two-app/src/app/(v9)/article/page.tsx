// 静态元数据

// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "article",
//   description: "hello article page",
// };

// export default function Page() {
//   return <div>hello article page</div>;
// }

// 动态元数据

// import type { Metadata } from "next";

// export async function generateMetadata({
//   searchParams,
// }: {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }): Promise<Metadata> {
//   const { title } = await searchParams;
//   // ajax OK
//   return {
//     title: `article ${title}`,
//   };
// }

// export default function Page() {
//   return <div>hello article page</div>;
// }

import type { Metadata } from "next";
export const metadata: Metadata = {
  // title: 'article',
  title: {
    absolute: "article", // 不会和模板结合
  },
  description: "hello article page",
};

export default function Page() {
  return <div>hello article page</div>;
}
