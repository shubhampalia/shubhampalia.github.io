import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Something about me</h2>
                        <p>
                        I am Shubham Palia, a 22-year-old hailing from of South Delhi, India. 
                        I am currently in my final year of pursuing BTech and MTech (integrated degree) at IIT Madras. 
                        I am someone who believes in hard work, determination, and persistence. 
                        When I'm not behind a computer screen writing elegant code or solving complex puzzles, 
                        I enjoy playing squash, a sport that has taught me the importance of hard work, perseverance, 
                        and teamwork. I have been playing squash for over ten years and have participated 
                        in many national tournaments.  I work extremely well under pressure, and I thrive in social settings. 
                        In addition to squash, I am an avid chess player, 
                        and I enjoy traveling to new places and exploring new cuisines. 
                        Whether I am tackling a tough coding challenge, maneuvering pieces on a chessboard, 
                        or exploring new places, I approach every experience with the same determination, 
                        persistence, and enthusiasm that define who I am.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Data Structures</h5>
                            </div>
                            
                            
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Algorithms</h5>
                            </div>

                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Competetive Coding</h5>
                            </div>

                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Web Development</h5>
                            </div>

                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Machine Learning</h5>
                            </div>
                            
                        </Carousel>
                        {/* <h3>Education</h3> */}
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
