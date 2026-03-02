import { memo, ReactElement, useEffect, useState } from "react";
import type { FC } from "react";
import { fetchBooks } from "../../service/home";
export interface IProps {
  children?: ReactElement;
}
const BooksCSR: FC<IProps> = memo(function (props) {
  const { children } = props;
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    // 在客户端获取数据 ( CSR )
    const count = Math.floor(Math.random() * 10 + 1);
    // const res = await fetchBooks(count);
    const books: any[] = Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `Book ${i + 1}`,
    }));
    // fetchBooks(count).then((res) => {
    //   console.log(res.data.books);
    //   setBooks(res.data.books);
    // });
    setBooks(books);
  }, []);

  return (
    <div className="home">
      <div>BooksCSR</div>
      <ul>
        {books?.map((item: any) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});
export default BooksCSR;
BooksCSR.displayName = "BooksCSR"; // 方便以后调试用的
