import React from "react";
import "animate.css";
import "../App.css";

const Card = (props) => {
  return (
      <div id="container">
        <div className="card">
          <img
            src={props.img}
            alt=""
          />
          <div className="card__details">
            {/* <span className="tag">Nature</span>
            <span className="tag">Lake</span> */}
            <div className="name">{props.title}</div>
            <p>
              {props.description}
            </p>
           <button>Read more</button>
          </div>
        </div>
      </div>
  );
};

export default Card;
