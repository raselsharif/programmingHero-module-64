import { Button } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        if (result) {
          const user = {
            name: result.user.displayName,
            email: result.user.email,
          };
          axiosPublic
            .post("/user", user)
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
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
