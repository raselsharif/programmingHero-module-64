import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./banner.css";
import img1 from "/home/01.jpg";
import img2 from "/home/02.jpg";
import img3 from "/home/03.png";
import img4 from "/home/04.jpg";
import img5 from "/home/05.png";
import img6 from "/home/06.png";

const Banner = () => {
  return (
    <Carousel showArrows={false}>
      <div>
        <img src={img1} alt="banner image" />
      </div>
      <div>
        <img src={img2} alt="banner image" />
      </div>
      <div>
        <img src={img3} alt="banner image" />
      </div>
      <div>
        <img src={img4} alt="banner image" />
      </div>
      <div>
        <img src={img5} alt="banner image" />
      </div>
      <div>
        <img src={img6} alt="banner image" />
      </div>
    </Carousel>
  );
};

export default Banner;
