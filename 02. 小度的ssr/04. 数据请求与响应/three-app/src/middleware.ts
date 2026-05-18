import { NextResponse, NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  // console.log(new URL(request.url).searchParams);

  // const auth = new URL(request.url).searchParams.get("auth");
  // console.log("auth--------------->", auth);
  const auth = true;
  if (!auth) {
    if (request.nextUrl.pathname.startsWith("/api")) {
      return NextResponse.json(
        {
          status: 401,
          body: "auth failed",
        },
        { status: 401 },
      );
    } else {
      return NextResponse.redirect(`${request.nextUrl.origin}/login`);
    }
  }
  return NextResponse.next();
}

// 匹配路径
export const config = {
  // matcher: ["/api/:path*", "/order/:path*"],
  // matcher: ["/api/post", "/order/:path*"],
  matcher: ["/api/:path*"],
};
