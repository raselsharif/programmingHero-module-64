import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAuth from "../../../../hooks/useAuth";
const CheckOut = () => {
  const { user } = useAuth();
  const [error, setError] = useState();
  const [successful, setSuccessful] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  // console.log(clientSecret);
  const axiosPublic = useAxiosPublic();
  const [carts, setCarts] = useState([]);
  console.log(carts);
  const totalPrice = carts.reduce((total, cart) => total + cart.price, 0);
  // console.log(totalPrice);
  useEffect(() => {
    axiosPublic.get("/carts").then((res) => setCarts(res.data));
  }, [axiosPublic]);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosPublic
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [axiosPublic, totalPrice]);
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
      // console.log("Payment Error", error);
      setError(error.message);
    } else {
      // console.log("Payment Successful", paymentMethod);
      setError("");
      setSuccessful(`TxID: , ${paymentMethod.id}`);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name,
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      console.log("Payment not confirm");
    } else {
      // console.log("payment successful", paymentIntent);
      if (paymentIntent.status == "succeeded") {
        console.log("payment successful");
        // save to db payment info
        const payment = {
          email: user?.email,
          price: totalPrice,
          date: new Date(),
          transactionId: paymentIntent?.id,
          cartId: carts.map((item) => item._id),
          menuItemId: carts.map((item) => item.menuId),
        };
        axiosPublic.post("/payment", payment).then((res) => {
          console.log(res.data);
        });
      }
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
        <p className="text-red-500 mt-2">{error}</p>
        <p className="text-green-500 mt-2">{successful}</p>
        <Button
          className="mt-6"
          type="submit"
          disabled={!stripe || !totalPrice}
        >
          Pay
        </Button>
      </form>
    </div>
  );
};

export default CheckOut;
