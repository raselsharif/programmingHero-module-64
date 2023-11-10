import { useEffect, useState } from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./testimonial.css";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  console.log(review);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <SectionHeader
        subHeader={"What Our Client Say"}
        header={"TESTIMONIALS"}
      />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((item) => (
            <SwiperSlide key={item._id}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
