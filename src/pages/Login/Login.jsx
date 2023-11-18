import { Button, Label, TextInput } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginEmailPass } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginEmailPass(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-md m-auto flex flex-col items-center h-[calc(100vh-250px)]">
      <form onSubmit={handleLogin} className="flex w-full flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label value="Email" />
          </div>
          <TextInput
            name="email"
            type="email"
            placeholder="Email"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Password" />
          </div>
          <TextInput
            name="password"
            placeholder="Password"
            type="password"
            required
            shadow
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
      <div className="mt-3">
        <Link to={"/register"}>Register</Link>
      </div>
    </div>
  );
};

export default Login;
