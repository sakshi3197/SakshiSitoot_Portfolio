import { Fragment } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <Fragment>
      <div className="title">
        <h3>Testimonials.</h3>
      </div>
      <Swiper {...props}>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/t2.png" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
            She is sincere, helpful and a kind person. She is a good listener and also has good rapport with other team members.            </p>
            <h6>Vaishali Padyal</h6>
            <span>Team Lead at Tata Consultancy Services, Mumbai.</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/t3.png" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
              Has good Analytical Ability and has good inclination towards learning new technologies.
            </p>
            <h6>Niteen Gokhale</h6>
            <span>Architect at Tata Consultancy Services, Mumbai.</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/t1.png" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
            She is professionally sound, hard-working and a devoted person. She has the motivation to take initiative tasks and we are gratified that she had been helpful in the advancement of our organization.
            </p>
            <h6>Renu Singh</h6>
            <span>Lead Developer at Prompt Software Consultants, Indore.</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="owl-dots"></div>
    </Fragment>
  );
};
export default Testimonials;
