import { Button } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const backToHome = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);

        const user = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        axiosPublic
          .post("/user", user)
          .then((res) => {
            console.log(res.data);
            backToHome("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Button onClick={handleGoogleLogin}>Login with Google</Button>
    </div>
  );
};

export default GoogleLogin;
