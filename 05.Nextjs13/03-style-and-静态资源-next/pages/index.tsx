import styles from "./index.module.scss";
import Image from "next/image";
import UserImg from "../assets/images/user.png";
export default function Home() {
  return (
    <>
      <h3>样式</h3>
      <div className="globel-style1">1.全局样式</div>
      <div className="global-style2">2.全局样式</div>
      <div className={styles["local-style1"]}>3.局部样式</div>
      <div className={styles.localStyle2}>4.局部样式</div>
      <div style={{ color: styles.primaryColor }}>5.使用scss导出的变量</div>
      <h3>public</h3>
      <Image src={"/feel.png"} alt="feel" width={140} height={140}></Image>
      <div className="box1-bg"></div>

      <h3>assets</h3>
      <Image src={UserImg} alt="feel"></Image>
      <div className="box2-bg"></div>

      <h3>字体图标</h3>
      <i
        className="iconfont icon-bianji"
        style={{
          fontSize: "40px",
          color: "#096",
        }}
      ></i>
    </>
  );
}
