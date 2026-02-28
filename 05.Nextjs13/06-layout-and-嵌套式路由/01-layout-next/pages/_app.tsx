import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Layout from "../components/layout";
import NestLayout from "../components/nest-layout";
import { ReactElement } from "react";
import type { NextPage } from "next";

// function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       <NestLayout>{page}</NestLayout>
//     </Layout>
//   );
// }

// 1. 先Component合并getLayout类型
type NextPageWidthLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};
// 2. 再AppProps合并Component类型
type AppPropsWidthLayout = AppProps & {
  Component: NextPageWidthLayout;
};

export default function App({ Component, ...rest }: AppPropsWidthLayout) {
  // 1. 布局组件
  // let cn = Component.displayName;
  // if (cn === "Profile") {
  //   return getLayout(<Component {...rest.pageProps} />);
  // } else if (cn === "Cart") {
  //   return (
  //     <Layout>
  //       <Component {...rest.pageProps} />
  //     </Layout>
  //   );
  // } else {
  //   return <Component {...rest.pageProps} />;
  // }

  // 2. 组件上直接暴露一个静态属性 getLayout 来指定布局
  // console.log("displayName=>", Component.displayName);
  // home  -> not header footer
  // cart  -> has header footer
  // profile -> 需要在布局中再嵌套布局
  // ....
  let getLayout = Component.getLayout
    ? Component.getLayout
    : (page: ReactElement) => page;
  return getLayout(<Component {...rest.pageProps} />);
}
