import { Html, Head, Main, NextScript } from "next/document";

// 不支持在这里了使用该内置组件
// import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      {/* 这里的SEO的配置,是作用域所有的页面 */}
      <Head>
        {/* <title>我是Title 111</title>
        <meta name="description" content="网易云音乐商城"></meta>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> */}
      </Head>
      {/* <Script src="http://localhost:3000"></Script> */}
      <body className="lcl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
