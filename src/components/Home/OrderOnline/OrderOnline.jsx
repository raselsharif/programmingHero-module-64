import SectionHeader from "../../SectionHeader/SectionHeader";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./orderOnline.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import slider1 from "/home/slide1.jpg";
import slider2 from "/home/slide2.jpg";
import slider3 from "/home/slide3.jpg";
import slider4 from "/home/slide4.jpg";
import slider5 from "/home/slide5.jpg";

const OrderOnline = () => {
  return (
    <div className="mt-20">
      <SectionHeader
        subHeader={"From 11:00am to 10:00pm"}
        header={"ORDER ONLINE"}
      />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h3
            className="mt-14 text-white absolute left-1/2
          -translate-x-1/2 bottom-0 text-xl font-semibold bg-slate-500 bg-opacity-60 w-full text-center py-2"
          >
            Name
          </h3>
          <img src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <h3
            className="mt-14 text-white absolute left-1/2
          -translate-x-1/2 bottom-0 text-xl font-semibold bg-slate-500 bg-opacity-60 w-full text-center py-2"
          >
            Name
          </h3>
          <img src={slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <h3
            className="mt-14 text-white absolute left-1/2
          -translate-x-1/2 bottom-0 text-xl font-semibold bg-slate-500 bg-opacity-60 w-full text-center py-2"
          >
            Name
          </h3>
          <img src={slider3} />
        </SwiperSlide>
        <SwiperSlide>
          <h3
            className="mt-14 text-white absolute left-1/2
          -translate-x-1/2 bottom-0 text-xl font-semibold bg-slate-500 bg-opacity-60 w-full text-center py-2"
          >
            Name
          </h3>
          <img src={slider4} />
        </SwiperSlide>
        <SwiperSlide>
          <h3
            className="mt-14 text-white absolute left-1/2
          -translate-x-1/2 bottom-0 text-xl font-semibold bg-slate-500 bg-opacity-60 w-full text-center py-2"
          >
            Name
          </h3>
          <img src={slider5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderOnline;
