import { useState } from "react";
import useConversation from "../src/zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      await axios
        .post(`/api/messages/send/${selectedConversation._id}`, { message })
        .then((res) => {
          const { data } = res;
          setMessages([...messages, data]);
        })
        .catch((error) => toast.error(error.response.data.error));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};

export default useSendMessage;
