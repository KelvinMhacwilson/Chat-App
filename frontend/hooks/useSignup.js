import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../src/context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      await axios
        .post("/api/auth/register", {
          userName,
          fullName,
          password,
          confirmPassword,
          gender,
        })
        .then((res) => {
          const { data } = res;
          localStorage.setItem("chat-user", JSON.stringify(data));
          setAuthUser(data);
          toast.success("Registered");
        })
        .catch((error) => toast.error(error.response.data.error));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

const handleInputErrors = ({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) => {
  if (
    fullName === "" ||
    userName === "" ||
    password === "" ||
    confirmPassword === "" ||
    gender === ""
  ) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};
