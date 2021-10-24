import React, { useState } from "react";
import "./Testimonials.css";
import { testimonials } from "../../helpers/CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Footer from "../Footer";

const Testimonials = () => {
  const [currTxt, setCurrTxt] = useState(0);
  return (
    <>
      <div className="testimonials-container">
        <h1>ממליצים</h1>
        <div className="testimonials">
          <div className="carousel-inner-1">
            <div
              className="left"
              onClick={() => {
                currTxt > 0 && setCurrTxt(currTxt - 1);
              }}
            >
              <ArrowBackIosIcon style={{ fontSize: 30 }} />
            </div>
            <div className="center">
              <i className="fas fa-quote-right"></i>
              <p>{testimonials[currTxt].subtitle}</p>
              <h5>{testimonials[currTxt].name}</h5>
            </div>
            <div
              className="right"
              onClick={() => {
                currTxt < testimonials.length - 1 && setCurrTxt(currTxt + 1);
              }}
            >
              <ArrowForwardIosIcon style={{ fontSize: 30 }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
