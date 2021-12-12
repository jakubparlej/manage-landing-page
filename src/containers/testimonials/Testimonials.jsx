import React from "react";
import Button from "../../components/button/Button";
import Testimonial from "../../components/testimonial/Testimonial";
import {
  avatarAnisha,
  avatarAli,
  avatarRichard,
  avatarShanai,
} from "./imports";
import "./Testimonials.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation, Pagination, A11y]);

function Testimonials() {
  const width = window.innerWidth;

  return (
    <div className="testimonials section__padding">
      <h2>What they've said</h2>
      <div className="testimonials__container">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={width > 800 ? 3 : 1}
        >
          <SwiperSlide>
            <Testimonial
              img={avatarAnisha}
              author="Anisha Li"
              text="“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keep everyone motivated.”"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              img={avatarAli}
              author="Ali Bravo"
              text="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              img={avatarRichard}
              author="Richard Watts"
              text="“Manage allows us to provide structure and process. It keeps us organized and focudes. I can’t stop recommending them to everyone I talk to!”"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              img={avatarShanai}
              author="Shanai Gough"
              text="“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in sync without being intrusive.”"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Button title="Get Started" class="btn-primary" />
    </div>
  );
}

export default Testimonials;
