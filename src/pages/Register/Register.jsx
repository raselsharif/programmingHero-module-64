import { Button, Label, TextInput } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { registerEmailPass } = useAuth(AuthContext);
  console.log(registerEmailPass);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    registerEmailPass(email, password)
      .then((result) => {
        console.log(result);
        const user = {
          name,
          email,
        };
        if (result) {
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
    <div className="max-w-md m-auto flex items-center h-[calc(100vh-250px)]">
      <form onSubmit={handleRegister} className="flex w-full flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label value="Name" />
          </div>
          <TextInput
            name="name"
            type="text"
            placeholder="Name"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Photo" />
          </div>
          <TextInput name="photo" type="text" placeholder="Photo URL" shadow />
        </div>
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
        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
};

export default Register;
