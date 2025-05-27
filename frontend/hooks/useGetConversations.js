import axios from "axios";
import { useEffect, useState } from "react";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        await axios
          .get("/api/users")
          .then((res) => {
            const { data } = res;
            setConversations(data);
          })
      }  finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { conversations, loading };
};

export default useGetConversations;
