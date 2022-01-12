import React from "react";
import img1 from "./Images/first.jpg";
import "./style.css";

const Cards = ({ count }) => {
  const ar = new Array(count).fill(0);
  return (
    <div className="container">
      <div className="row">
        {ar.map((item) => (
          <div className="col-md-3">
            <div class="card" style={{ width: "14rem" }}>
              <img src={img1} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Movie title</h5>
                <p className="card-text">
                  Movie Description
                </p>
                <a href="#" className="btn btn-primary">
                  Click here
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
