import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
// import headerImg from "../assets/img/circular_dua.png"
import headerImg from "../assets/img/shubham_kodai_img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Student at IIT Madras",
    "Backend Developer",
    "Squash Player",
    "Data Scientist",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}

                  <div className="social-icon-banner">
                    <a href="https://www.linkedin.com/in/shubham-palia-0b5685176/">
                      <img src={navIcon1} alt="" />
                    </a>
                    <a href="https://www.facebook.com/shubham.palia.35/">
                      <img src={navIcon2} alt="" />
                    </a>
                    <a href="https://www.instagram.com/shubhampalia/">
                      <img src={navIcon3} alt="" />
                    </a>
                  </div>
                  <h1>
                    {`Hi! I'm Shubham Palia \n`}
                    <h2>
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='["Student at IIT Madras", "Backend Developer", "Squash Player", "Data Scientist"]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h2>
                  </h1>

                  

                  <button onClick={() => console.log("connect")}>
                    
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <section className="banner-img">
                    <img src={headerImg} alt="Header Img" />
                  </section>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
