import React from "react";

function SingleProject(props) {
  return (
    <div className="single-project col-6">
      <a href={props.link} target="blank">
        <div className="d-flex">
          <h1>{props.title}</h1>
        </div>
        <img src={props.project_img} alt={props.tilte} className="img-fluid" />
      </a>
    </div>
  );
}

export default SingleProject;
