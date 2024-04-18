import { useEffect, useState } from "react";
import useConversation from "../src/zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        await axios
          .get(`/api/messages/${selectedConversation._id}`)
          .then((res) => {
            const { data } = res;
            setMessages(data);
          })
          .catch((error) => toast.error(error.response.data.error));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
