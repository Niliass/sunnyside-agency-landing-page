import React from "react";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="row">
        <div className="gallery__img">
          <img
            src="./images/desktop/image-gallery-milkbottles.jpg"
            alt="gallery image"
            className="gallery__img--desk"
          />
          <img
            src="./images/mobile/image-gallery-milkbottles.jpg"
            alt="gallery image"
            className="gallery__img--mob"
          />
        </div>
        <div className="gallery__img">
          <img
            src="./images/desktop/image-gallery-orange.jpg"
            alt="gallery image"
            className="gallery__img--desk"
          />
          <img
            src="./images/mobile/image-gallery-orange.jpg"
            alt="gallery image"
            className="gallery__img--mob"
          />
        </div>
      </div>
      <div className="row">
        <div className="gallery__img">
          <img
            src="./images/desktop/image-gallery-cone.jpg"
            alt="gallery image"
            className="gallery__img--desk"
          />
          <img
            src="./images/mobile/image-gallery-cone.jpg"
            alt="gallery image"
            className="gallery__img--mob"
          />
        </div>
        <div className="gallery__img">
          <img
            src="./images/desktop/image-gallery-sugar-cubes.jpg"
            alt="gallery image"
            className="gallery__img--desk"
          />
          <img
            src="./images/mobile/image-gallery-sugar-cubes.jpg"
            alt="gallery image"
            className="gallery__img--mob"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
