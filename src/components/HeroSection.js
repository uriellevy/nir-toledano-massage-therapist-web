import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>ניר טולדנו</h1>
      <p>מעסה מקצועי</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/about"
        >
          ספר לי עוד
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="/contact"
          onClick={console.log("hey")}
        >
          קבע עכשיו
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
