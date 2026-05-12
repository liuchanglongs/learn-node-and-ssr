// 导入字体图标
import "../assets/cus-font/iconfont.css";
// 1.导入了全局样式
import "../styles/globals.css";
import "../styles/main.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
