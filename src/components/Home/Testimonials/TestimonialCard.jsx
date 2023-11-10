import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const TestimonialCard = ({ item }) => {
  const { details, rating, name } = item;
  return (
    <div className="text-center">
      <div className="rating-star">
        <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
      </div>
      <div>
        <img src="/icon/quote.png" className="my-7 mx-auto" alt="" />
      </div>
      <p className="px-16">{details}</p>
      <h3 className="my-4 font-semibold text-xl">{name}</h3>
    </div>
  );
};

export default TestimonialCard;
