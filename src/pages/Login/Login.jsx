import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <Link to={"/register"}>Register</Link>
    </div>
  );
};

export default Login;
