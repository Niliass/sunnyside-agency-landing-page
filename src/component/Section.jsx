import React from "react";

const Section = ({ cls, data }) => {
  return (
    <section className={cls}>
      <div className={`${cls}__info`}>
        <div className={`${cls}__container`}>
          <h2 className={`${cls}__title`}>{data.title}</h2>
          <p className={`${cls}__desc`}>{data.description}</p>
          <a href="#" className={`${cls}__btn`}>
            Learn more
          </a>
        </div>
      </div>
      <div className={`${cls}__img`}>
        <img
          src={`./images/desktop/image-${cls}.jpg`}
          alt="transform image"
          className={`${cls}__img--desk`}
        />
        <img
          src={`./images/mobile/image-${cls}.jpg`}
          alt="transform image"
          className={`${cls}__img--mob`}
        />
      </div>
    </section>
  );
};

export default Section;
