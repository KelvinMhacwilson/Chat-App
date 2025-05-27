import MessageContainer, {
  NoChatSelected,
} from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useConversation from "../../zustand/useConversation";
import { useEffect, useState } from "react";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { setSelectedConversation, selectedConversation } = useConversation();
  useEffect(() => {
    if (windowWidth < 767) {
      setSelectedConversation(null);
    }
  }, [setSelectedConversation, windowWidth]);
  return (
    <div className="relative m-auto min-h-[300px] flex h-screen md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {selectedConversation ? <MessageContainer /> : <NoChatSelected />}
    </div>
  );
};

export default Home;
