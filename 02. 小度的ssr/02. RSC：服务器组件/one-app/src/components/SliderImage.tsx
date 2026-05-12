"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderImage() {
  const settings = {
    dots: true,
  };
  return (
    <Slider
      // style={{ width: 400, height: 300, margin: "0 auto" }}
      {...settings}
    >
      <div>
        <Image
          src="https://picsum.photos/400/200"
          alt=""
          width="400"
          height="300"
        />
      </div>
      <div>
        <Image
          src="https://picsum.photos/400/200"
          alt=""
          width="400"
          height="300"
        />
      </div>
      <div>
        <Image
          src="https://picsum.photos/400/200"
          alt=""
          width="400"
          height="300"
        />
      </div>
      <div>
        <Image
          src="https://picsum.photos/400/200"
          alt=""
          width="400"
          height="300"
        />
      </div>
    </Slider>
  );
}
