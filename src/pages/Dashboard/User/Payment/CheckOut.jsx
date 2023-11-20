import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "flowbite-react";

const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment Error", error);
    } else {
      console.log("Payment Successful", paymentMethod);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 border p-4">
      <form onSubmit={handleSubmit}>
        <CardElement
          className="border  p-2"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        ></CardElement>
        <Button className="mt-6" type="submit" disabled={!stripe}>
          Pay
        </Button>
      </form>
    </div>
  );
};

export default CheckOut;
