// import HYButton from "components/hy-button"; // baseURL: .
import HYButton from "@/components/hy-button"; // baseURL: .

export default function Home() {
  // 1.判断当前的运行的环境
  if (typeof window === "object") {
    console.log("client");
    // console.log(process.server); // Next.js 不支持
  } else {
    console.log("server server");
  }

  // 2.读取环境变量
  if (typeof window === "object") {
    console.log("client");
    console.log(process.env.NEXT_PUBLIC_BASE_URL);
  } else {
    console.log("server");
    console.log(process.env.NAME);
    console.log(process.env.PORT);
    console.log(process.env.HOST);
    console.log(process.env.NEXT_PUBLIC_BASE_URL);
  }

  return (
    <>
      <div>Hello World: {process.env.NEXT_PUBLIC_BASE_URL}</div>
      <HYButton></HYButton>
    </>
  );
}
