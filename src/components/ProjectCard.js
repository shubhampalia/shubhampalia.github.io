// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, category, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={5} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <h6>{category}</h6>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   );
// };

import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, category, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={5} md={4}>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <h6>{category}</h6>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
