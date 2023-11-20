import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import CheckOut from "./CheckOut";

const stipePromise = loadStripe(import.meta.env.VITE_payment_PK);
const Payment = () => {
  return (
    <div>
      <SectionHeader header={"Payment"} />
      <div>
        <Elements stripe={stipePromise}>
          <CheckOut />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
