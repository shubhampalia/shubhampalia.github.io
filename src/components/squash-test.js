import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { SimpleCarouselSlider } from "react-simple-carousel-image-slider";
import "react-simple-carousel-image-slider/dist/index.css";

import images from "../assets/wanderlust/WanderlustImages.js";



export const Squash = () => {
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <section className="squash-pages" id="squash">
      <h2> under maintenance</h2>
      {/* <AliceCarousel
        items={images.map((image, index) => (
          <img src={image} alt={`Wanderlust ${index}`} />
        ))}
        responsive={responsive}
        // autoPlay
        // autoPlayInterval={3000}
        // animationDuration={1000}
        infinite={true}
        disableDotsControls={true}
        // disableButtonsControls
        buttonsDisabled={true}
        // mouseTrackingEnabled
        vertical={true}
        // verticalScrolling={true}
      /> */}

      
    </section>
  );
};
