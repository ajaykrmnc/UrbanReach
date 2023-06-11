import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {

  const url = "//" + props.details.link;
  return (
    <div>
      <div style={{border: "1px solid #EEEEE"}}>
        {props.image && (
          <div className="text-center">
            <img src={props.image} className="img-fluid mt-2" alt='phot' />
          </div>
        )}
        <strong class="d-inline-block mb-2 text-primary">
          {props.details.title && props.details.title}
        </strong>

        <p class="">{props.details.content}</p>
        {url !== "//" && (
          <Link
            to={url}
            target="_blank"
            className="btn btn-success d-block "
          >
            Read More
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;