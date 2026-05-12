import Head from "next/head";
import Script from "next/script";
import About from "./about";
export default function Home() {
  return (
    <>
      {/* 作用:方便我们做SEO 和 添加一个外部的资源 */}
      <Head>
        {/* html的标签 */}
        <title>我是Title</title>
        <meta name="description" content="lcl"></meta>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      {/* 是给 home 首页的body 插入一个script标签 */}
      {/* <Script src="https://www.baidu.com/"></Script> */}

      <div>Hello World 111 </div>
      <About></About>
    </>
  );
}
