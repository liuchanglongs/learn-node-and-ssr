import { memo, ReactElement } from "react";
import type { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
// import { fetchBookDetail, fetchBooks } from "../../service/home";
export interface IProps {
  children?: ReactElement;
  book?: any;
  // ...
}
const BooksDetailSSG: FC<IProps> = memo(function (props) {
  const { children, book } = props;
  console.log("BooksDetailSSG props=>", props);

  return (
    <div className="books-detail-ssg">
      <div>BooksDetailSSG</div>
      <div>
        {book.id} --- {book.name}
      </div>
    </div>
  );
});
export default BooksDetailSSG;
BooksDetailSSG.displayName = "BooksDetailSSG"; // 方便以后调试用的

export const getStaticPaths: GetStaticPaths = async (context) => {
  //   const res = await fetchBooks(5);
  //   // console.log(res.data.books); // 5
  //   const ids = res.data.books.map((item: any) => {
  //     return {
  //       params: {
  //         id: item.id + "", // "0" "1" "2" "3" "4"
  //       },
  //     };
  //   });
  return {
    // 模拟GetStaticPaths类型的请求数据
    paths: [
      { params: { id: "0" } },
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
    ],
    fallback: false, // 如果动态路由的路径没有匹配上的,那么返回404页面
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("getStaticProps params=>", context);
  //  "0" "1" "2" "3" "4"
  // const res = await fetchBookDetail(context.params?.id as string);
  return {
    props: {
      book: {
        id: context.params?.id,
        name: `book${context.params?.id}`,
      },
    },
  };
};
