import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

// 1.可以拦截，API请求、router切换、资源加载、站点图片等
// 2.这个中间件只在服务器段运行
export function middleware(req: NextRequest, event: NextFetchEvent) {
  // 1.常用的请求参数
  // console.log("中间=>", req.url);
  // console.log("event", event);

  // 2.返回next()
  // return NextResponse.next(); // 返回next 和 没有返回的效果是一样，直接放行

  // 3.返回的 重定向
  // let token = req.cookies.get("token")?.value;
  // console.log("token=>", token);
  // if (!token && req.nextUrl.pathname !== "/login") {
  //   // 重定向到登录页面
  //   return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
  // }

  // 4.返回的 重写 ->  vue.config  devServer-> proxy
  if (req.nextUrl.pathname.startsWith("/juanpi/api")) {
    // http://locahost:3000/juanpi/api/homeInfo?id=100
    // 重写 url 为下面的 url
    // http://codercba.com:9060/juanpi/api/homeInfo?id=100
    return NextResponse.rewrite(
      new URL(req.nextUrl.pathname, "http://codercba.com:9060")
    );
  }
}

// 匹配器 -> 过滤
export const config = {
  // (?!_next)  匹配不包含 _next 路径
  matcher: ["/((?!_next/static|api|favicon.ico|.well).*)"],
};
