import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  // console.log("App", props);
  // console.log("Component", Component.displayName);

  const router = useRouter();

  function goToFindPage() {
    // 1.参数一
    // router.push("/find");
    // router.push({
    //   pathname: "/find",
    //   query: {
    //     id: 1000,
    //   },
    // });
    // router.push("https://www.jd.com");

    // 2.参数二
    router.push("/find?id=1000", "find_v2"); // as
    // router.replace()
  }

  function goBack() {
    router.back();
  }

  useEffect(() => {
    // 路由守卫 - 全局监听路由的切换
    const handleRouterChange = (url: string) => {
      console.log("routeChangeStart=>", url); // url 是当前访问的路径
    };
    const handleRouterChange2 = (url: string) => {
      console.log("routeChangeComplete=>", url); // url 是当前访问的路径
    };
    router.events.on("routeChangeStart", handleRouterChange);
    router.events.on("routeChangeComplete", handleRouterChange2);
    return () => {
      router.events.off("routeChangeStart", handleRouterChange);
      router.events.off("routeChangeComplete", handleRouterChange2);
    };
  }, []);

  return (
    <div>
      <h1>组件导航</h1>
      <div>
        <Link href="/">
          <button>home</button>
        </Link>
        <Link href="/lcl?id=1000">
          <button>lcl</button>
        </Link>
        <Link href="/category">
          <button>category</button>
        </Link>

        <Link
          href={{
            pathname: "/cart",
            query: {
              count: 100,
            },
          }}
        >
          <button>cart</button>
        </Link>

        {/* as: 是给路径 起一个 别名, 隐藏真正的路径 */}
        <Link href="/profile?id=1000" as="profile_v2">
          <button>profile</button>
        </Link>

        <Link href="/more" replace>
          <button>more replace</button>
        </Link>

        <Link href="https://www.jd.com" target={"_blank"}>
          <button>jd.com</button>
        </Link>
        <br />
        <h1>编程式导航</h1>

        <button onClick={goToFindPage}>find</button>
        <button onClick={goBack}>back</button>
        <h1>动态路由-路由参数</h1>
        <Link href="/detail/lcl/1000/18">
          <button>params</button>
        </Link>
        <Link href="/detail/lcl/1000/18?name=lcl&age=18&sex=man">
          <button>params and query</button>
        </Link>
      </div>
      {/* 页面的内容: router-view */}
      <Component {...pageProps} />
    </div>
  );
}
