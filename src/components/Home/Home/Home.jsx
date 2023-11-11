import { Helmet } from "react-helmet-async";
import OurMenu from "../OurMenu/OurMenu";
import Banner from "../Banner/Banner";
import OrderOnline from "../OrderOnline/OrderOnline";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>HOME | Bistro Boss</title>
      </Helmet>
      <Banner />
      <div className="max-w-[1320px] mx-auto">
        <OrderOnline />
        <OurMenu />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
