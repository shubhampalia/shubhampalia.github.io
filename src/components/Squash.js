import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import images from "../assets/wanderlust/WanderlustImages.js";
import squashCollage from "../assets/img/squash_collage.png";

export const Squash = () => {
  const slider = (
    <AwesomeSlider
      className="aws-sld"
      infinite={true}
      animation="fade"
      // bullets={true}
    >
      {/* {images.map((image, index) => (
        <div key={index} data-src={image} />
      ))} */}
      <div data-src={squashCollage} />
    </AwesomeSlider>
  );

  return (
    <section className="aws-sld__content" id="squash">
      <h1>Squash is an art form & today, I'm painting a masterpiece.</h1>
      {slider}
    </section>
  );
};
