import axios from "axios";

const axiosPublic = axios.create({
  // withCredentials: true,
  baseURL: "http://localhost:5000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
