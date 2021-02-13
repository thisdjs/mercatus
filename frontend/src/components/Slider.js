import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./slider.css";

function Slider() {
  return (
    <>
      <Carousel
        showArrows
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
      >
        <div>
          <img
            src={
              "https://images.unsplash.com/photo-1609347346277-f3abdf2f7106?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            alt="placeholder-banner"
          />
        </div>
        <div>
          <img
            src={
              "https://images.unsplash.com/photo-1593069052287-e0e2ada56fce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            }
            alt="placeholder-banner"
          />
        </div>
        <div>
          <img
            src={
              "https://images.unsplash.com/photo-1546695244-22170c3ade72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
            }
            alt="placeholder-banner"
          />
        </div>
      </Carousel>
    </>
  );
}

export default Slider;
