import Image from "next/image";
import UseImg from "../assets/images/user.png";
const About = function () {
  return (
    <div>
      <h2>about</h2>
      {/* 1.加载显示本地的图片 */}
      <Image src={UseImg} alt="User"></Image>

      {/* 2.加载显示网路的图片 */}
      <Image
        className="custom-img"
        src={
          "https://p2.music.126.net/mqTKX_-Llqif4oFJkfWpRw==/109951164206445553.jpg?param=140y140"
        }
        alt="User"
        width={140}
        height={140}
        priority
      ></Image>

      <div className="box">
        <Image
          src={
            "https://p2.music.126.net/mqTKX_-Llqif4oFJkfWpRw==/109951164206445553.jpg?param=400y400"
          }
          alt="User"
          fill
        ></Image>
      </div>

      {/* <img src="" alt="" /> */}
    </div>
  );
};

export default About;
