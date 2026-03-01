import { log } from "console";
import { memo, ReactElement } from "react";
import type { FC } from "react";
// import { fetchBooks } from "../../service/home";
import { GetStaticPaths, GetStaticProps } from "next";
export interface IProps {
  children?: ReactElement;
  books?: any[];
}
const BooksSSG: FC<IProps> = memo(function (props) {
  console.log("props", props);
  const { children, books } = props;
  return (
    <div className="home">
      <div>BooksSSG</div>
      <ul>
        {books?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});
export default BooksSSG;
BooksSSG.displayName = "BooksSSG"; // 方便以后调试用的

// // 页面 内容 取决于外部数据：使用 Next.js 提供的 getStaticProps 函数。
export async function getStaticProps(context: GetStaticProps) {
  console.log("getStaticProps context", context);
  // let count = Math.floor(Math.random() * 10 + 1);
  // const res = await fetchBooks(count);
  return {
    props: {
      // 模拟请求数据
      books: [
        { name: "book1", id: "1" },
        { name: "book2", id: "2" },
        { name: "book3", id: "3" },
      ],
    },
  };
}
