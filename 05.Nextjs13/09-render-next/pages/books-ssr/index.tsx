import { memo, ReactElement } from "react";
import type { FC } from "react";
import { GetServerSideProps } from "next";
// import { fetchBooks } from "../../service/home";
export interface IProps {
  children?: ReactElement;
  books?: any[];
  // ...
}
const BooksSSR: FC<IProps> = memo(function (props) {
  const { children, books } = props;
  return (
    <div className="home">
      <div>BooksSSR</div>
      <ul>
        {books?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});
export default BooksSSR;
BooksSSR.displayName = "BooksSSR"; // 方便以后调试用的

// // 这个函数在每次用户访问页面的时候会回调
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("getServerSideProps");
  console.log(context.query.count);
  const count = context?.query?.count || 10;
  const books = Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Book ${i + 1}`,
  }));
  console.log(books);
  // const res = await fetchBooks(parseInt(context.query.count as string));
  // console.log(res);
  return {
    props: {
      books,
    },
  };
};
