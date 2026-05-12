import hyRequest from "../service/index";
interface IResultData {
  code: number;
  data: any;
}
export default function Home() {
  async function getHomeInfo() {
    // const res = await hyRequest.request<IResultData>({
    //   url: "/homeInfo",
    //   method: "GET",
    // });
    // console.log(res.data.data);

    const res = await hyRequest.get<IResultData>("/homeInfo");
    console.log(res);
  }
  return (
    <>
      <div>hello world</div>
      <div>
        <button onClick={getHomeInfo}>getHomeInfo</button>
      </div>
    </>
  );
}
