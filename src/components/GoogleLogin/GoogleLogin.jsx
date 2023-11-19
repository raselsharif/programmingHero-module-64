import { Button } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const GoogleLogin = () => {
  const { googleLogin, user } = useAuth();
  // const loggedInUserEmail = user?.email;
  // const [usersDB, setUsersDB] = useState([]);
  // const [userDB, setUserDB] = useState({});
  // usersDB?.map((user) => setUserDB(user));
  // console.log(user);
  // console.log(loggedInUserEmail);
  const axiosPublic = useAxiosPublic();
  // axiosPublic.get("/users").then((res) => {
  //   setUsersDB(res.data);
  // });
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
