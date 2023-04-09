import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import social_img from "../assets/img/social_img.jpg";
import cbm_img from "../assets/img/cbm_img.jpg"
import lap_img from "../assets/img/lap_img.png"
import seedAtlas_img from "../assets/img/seedAtlas_img.png"
import freecharge_img from "../assets/img/freecharge_img.jpg"

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {
  
  const projects = [

    {
      title: "Context Based Modelling",
      category: "Research",
      description: "Confidential as of now",
      imgUrl: cbm_img,
      githubLink: "https://www.instagram.com/shubhampalia/",
    },

    {
      title: "Seed Atlas",
      category: "Research",
      description: "Found differentially expressed genes that result in nutritial difference in different layers of rice seed",
      imgUrl: seedAtlas_img,
      githubLink: "https://www.instagram.com/shubhampalia/",
    },
    
    {
      title: "Social",
      category: "Web Development",
      description: "Web-app to read & write reviews for restaurants",
      imgUrl: social_img,
      githubLink: "https://www.instagram.com/shubhampalia/",
    },

    {
      title: "Loan Agaist Property",
      category: "Data Science & Machine Learning",
      description: "Predicted credit risks of customers seeking loan against property using random forest",
      imgUrl: lap_img,
      githubLink: "https://www.instagram.com/shubhampalia/",
    },

    {
      title: "UPI freecharge",
      category: "Data Science & Machine Learning",
      description: "Predicted freecharge account holders & associated loan risks",
      imgUrl: freecharge_img,
      githubLink: "https://www.instagram.com/shubhampalia/",
    },


  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of my key projects that I have done in my insti life. As some of my projects are confidential, I will update this section by June 2023.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
