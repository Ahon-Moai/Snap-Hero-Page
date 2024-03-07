import React from "react";
import HeroIMG from "../assets/images/image-hero-desktop.png";
function Hero() {
  return (
    <>
      <div className="Left-Hero-Section">
        <h1 className="hero-title">Make remote work</h1>
        <p className="Hero-Para">
          Get your team in sync. no matter your location. Streamline processes,
          create team ritulas and watch productivity soar.
        </p>
        <button className="btn-hero">Learn More</button>
      </div>
      <div className="Image">
        <img className="Image-Hero" src={HeroIMG} alt="PIC" />
      </div>
    </>
  );
}

export default Hero;
