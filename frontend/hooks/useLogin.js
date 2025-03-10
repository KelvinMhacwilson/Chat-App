import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../src/context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signin = async ({ username: userName, password }) => {
    const success = validateInformation({ userName, password });
    if (!success) return;
    setLoading(true);
    try {
      await axios
        .post("/api/auth/login", { userName, password })
        .then((res) => {
          const { data } = res;
          localStorage.setItem("chat-app", JSON.stringify(data));
          setAuthUser(data);
        })
        .catch((error) => toast.error(error.response.data));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signin, loading };
};

export default useLogin;

const validateInformation = ({ userName, password }) => {
  if (userName === "" || password === "") {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
};
