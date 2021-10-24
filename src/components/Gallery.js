import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery">
        <div className="gallery-item">
          <img
            src={require("../img/1.jpg").default}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/2.jpg").default}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/3.jpg").default}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/4.jpg").default}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/5.jpg").default}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/6.jpg").default}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/7.jpg").default}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/8.jpg").default}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/9.jpg").default}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/10.jpg").default}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/11.jpg").default}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/12.jpg").default}
            alt=""
            className="gallery-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
