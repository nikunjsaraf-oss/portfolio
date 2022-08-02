import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/achievements assets/a1.png";
import AVTR2 from "../../assets/achievements assets/a2.jpg";
import AVTR3 from "../../assets/achievements assets/a3.webp";
import AVTR4 from "../../assets/achievements assets/a4.webp";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR4,
    name: "Flutter Festival",
    review:
      "Lead facilitator of GDSC's “Flutter Festival”. Conducted many study sessions consisting more than 100 studemts and helped them learn cross-platform app development using the Flutter SDk by Google.",
  },
  {
    avatar: AVTR3,
    name: "Android Study Jams",
    review:
      "Lead facilitator of GDSC's “Android Study Jams”. Conducted many study sessions consisting more than 100 studemts and helped them learn Android Devlopment using Kotlin.",
  },
  {
    avatar: AVTR2,
    name: "CodeSpark",
    review:
      "Co-host of a National level coding contest “CodeSpark”- February 2021",
  },

  {
    avatar: AVTR1,
    name: "HackerRank",
    review: "Gold Badge Hackerrank - Java.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>My Accomplishments</h5>
      <h2>Achievements</h2>
      <h5 className="instruction">Swipe on an achievement to see more.</h5>
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
