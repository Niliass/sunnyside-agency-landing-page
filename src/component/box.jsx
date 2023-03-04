import React from "react";

const Box = ({ cls, data }) => {
  return (
    <section className={cls}>
      <div className={`${cls}__img`}>
        <img
          src={`./images/desktop/image-${cls}.jpg`}
          alt="graphic design image"
          className={`${cls}__img--desk`}
        />
        <img
          src={`./images/mobile/image-${cls}.jpg`}
          alt="graphic design image"
          className={`${cls}__img--mob`}
        />
      </div>
      <div className={`${cls}__info`}>
        <h2 className={`${cls}__title`}>{data.title}</h2>
        <p className={`${cls}__desc`}>{data.description}</p>
      </div>
    </section>
  );
};

export default Box;
