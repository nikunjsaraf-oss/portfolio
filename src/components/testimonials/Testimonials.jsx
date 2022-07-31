import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda nihil non, dolores quae esse adipisci consequatur et recusandae unde molestias quas ut suscipit labore, reiciendis corporis totam, quod aspernatur.",
  },
  {
    avatar: AVTR2,
    name: "John",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda nihil non, dolores quae esse adipisci consequatur et recusandae unde molestias quas ut suscipit labore, reiciendis corporis totam, quod aspernatur.",
  },
  {
    avatar: AVTR3,
    name: "Mark",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda nihil non, dolores quae esse adipisci consequatur et recusandae unde molestias quas ut suscipit labore, reiciendis corporis totam, quod aspernatur.",
  },
  {
    avatar: AVTR4,
    name: "Mia",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda nihil non, dolores quae esse adipisci consequatur et recusandae unde molestias quas ut suscipit labore, reiciendis corporis totam, quod aspernatur.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
