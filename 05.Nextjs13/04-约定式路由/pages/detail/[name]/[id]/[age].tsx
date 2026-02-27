import { ReactElement } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Detail: FC<IProps> = function (props) {
  const router = useRouter();
  const { name, id, age, sex } = router.query;
  console.log(router); // { name: 'lcl', id: '1000', age: '18' }
  const { children } = props;
  return (
    <div className="detail">
      <h1>detail</h1>
      <h2>
        name: {name}, id: {id}, age: {age}, sex: {sex}
      </h2>
    </div>
  );
};
export default Detail;
Detail.displayName = "Detail"; // 方便以后调试用的
