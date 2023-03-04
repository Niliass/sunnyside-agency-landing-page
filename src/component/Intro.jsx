import React from "react";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <h1 className="intro__title">We are creatives</h1>
        <img
          src="./images/icon-arrow-down.svg"
          alt="down arrow icon "
          className="intro__arrow"
        />
      </div>
      <div className="intro__bg">
        <img
          src="./images/desktop/image-header.jpg"
          alt="intro background "
          className="intro__bg--desk"
        />
        <img
          src="./images/mobile/image-header.jpg"
          alt="intro background "
          className="intro__bg--mob"
        />
      </div>
    </section>
  );
};

export default Intro;
