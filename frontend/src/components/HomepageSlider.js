import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./homepageSlider.css";

const images = [
  {
    src:
      "https://images.unsplash.com/photo-1534459905198-35d70a2d9370?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1554151447-b9d2197448f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1523268755815-fe7c372a0349?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
  },
];

function HSlider() {
  return (
    <Carousel
      className="homepage-main"
      showArrows
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={5000}
      emulateTouch
    >
      {images.map((img, index) => {
        return (
          <div key={index}>
            <img src={img.src} alt="placeholder-banner" />
          </div>
        );
      })}
    </Carousel>
  );
}

export default HSlider;
