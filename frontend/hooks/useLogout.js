import toast from "react-hot-toast";
import { useAuthContext } from "../src/context/AuthContext";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    setLoading(true);
    try {
      await axios
        .post("/api/auth/logout")
        .then(() => {
          toast.success("Logged out");
          localStorage.removeItem("chat-user");
          setAuthUser(null);
          navigate("/login");
        })
        .catch((error) => toast.error(error.response.data.error));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
