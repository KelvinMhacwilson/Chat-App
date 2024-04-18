import { useEffect } from "react";
import UseSocket from "../src/context/SocketContext";
import useConversation from "../src/zustand/useConversation";
import notificationSound from "../src/assets/notification.mp3";

const useListenMessages = () => {
  const { socket } = UseSocket();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
