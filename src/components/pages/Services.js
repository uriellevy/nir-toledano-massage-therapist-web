import React, { useState } from "react";
import "./Services.css";
import { images } from "../../helpers/CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Footer from "../Footer";
import { Button } from "../Button";

const Services = () => {
  const [currImg, setCurrImg] = useState(0);
  return (
    <>
      <div className="services-container">
        <h1 className="title">טיפולים</h1>
        <div className="services">
          <div
            className="carousel-inner"
            style={{ backgroundImage: `url(${images[currImg].img})` }}
          >
            <div
              className="left"
              onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);
              }}
            >
              <ArrowBackIosIcon style={{ fontSize: 40 }} />
            </div>
            <div className="center">
              <h1>{images[currImg].title}</h1>
              <p>{images[currImg].subtitle}</p>
              <Button buttonStyle="btn--test" pathway="./contact">
                צור קשר
              </Button>
            </div>
            <div
              className="right"
              onClick={() => {
                currImg < images.length - 1 && setCurrImg(currImg + 1);
              }}
            >
              <ArrowForwardIosIcon style={{ fontSize: 40 }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
