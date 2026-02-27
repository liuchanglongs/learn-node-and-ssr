import axios from "axios";
export default function Home() {
  function getHomeInfo() {
    // axios.get("http://codercba.com:9060/juanpi/api/homeInfo").then((res) => {
    //   console.log(res);
    // });
    axios.get("http://localhost:3000/juanpi/api/homeInfo").then((res) => {
      console.log(res);
    });
  }
  return (
    <>
      <div>hello world</div>
      <button onClick={getHomeInfo}>getHomeInfo</button>
    </>
  );
}
