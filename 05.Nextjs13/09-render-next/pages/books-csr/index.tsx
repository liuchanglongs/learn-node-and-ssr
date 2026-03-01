import { memo, ReactElement, useEffect, useState } from "react";
import type { FC } from "react";
import { fetchBooks } from "../../service/home";
export interface IProps {
  children?: ReactElement;
}
const BooksCSR: FC<IProps> = memo(function (props) {
  const { children } = props;
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   // 在客户端获取数据 ( CSR )
  //   let count = Math.floor(Math.random() * 10 + 1);
  //   fetchBooks(count).then((res) => {
  //     console.log(res.data.books);
  //     setBooks(res.data.books);
  //   });
  // }, []);

  return (
    <div className="home">
      <div>BooksCSR</div>
      {/* <ul>
        {books?.map((item: any) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul> */}
    </div>
  );
});
export default BooksCSR;
BooksCSR.displayName = "BooksCSR"; // 方便以后调试用的
