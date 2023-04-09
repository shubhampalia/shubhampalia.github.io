import { SimpleCarouselSlider } from "react-simple-carousel-image-slider";
import "react-simple-carousel-image-slider/dist/index.css";


import images from '../assets/wanderlust/WanderlustImages.js';

export const WanderLust = () => {
  return (
    <section className="Wanderlust" id="wanderlust">
      <SimpleCarouselSlider
        images={images}
        width="100%"
        height="700px"
        parallax= {true}
        autoplay= {true}
        infinity={true}
        duration="2s"
        // thumb={true}

        responsive={[
          {
            breakPoint: 420,
            height: "300px",
            parallax: false,
          },
          {
            breakPoint: 600,
            height: "400px",
          },
          {
            breakPoint: 1000,
            height: "500px",
          },
        ]}
      />
    </section>
  );
};
