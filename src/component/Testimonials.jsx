import React, { useState } from "react";
import Data from "../testimonialsData";

const Testimonials = () => {
  const [data, setData] = useState(Data);
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">Client testimonials</h2>
      <ul className="testimonials__clients">
        {data &&
          data.map(({ name, job, img, content }, idx) => {
            return (
              <li className="testimonials__client" key={idx}>
                <img
                  src={img}
                  alt="tesitmonials client image"
                  className="testimonials__client__img"
                />
                <p className="testimonials__client__content">{content}</p>
                <div className="testimonials__client__info">
                  <h3 className="testimonials__client__name">{name}</h3>
                  <p className="testimonials__client__job">{job}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Testimonials;
