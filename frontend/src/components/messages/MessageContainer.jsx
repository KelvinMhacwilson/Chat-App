import { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const MessageContainer = () => {
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
  const navigate = useNavigate();
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    if (windowWidth > 767) {
      navigate("/home");
    }
  }, [setSelectedConversation, windowWidth, navigate]);
  return (
    <div className="md:min-w-[400px] lg:min-w-[600px] xl:min-w-[900px] 2xl:min-w-[1000px]  w-full mb-9 md:mb-0  flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-teal-500 md:hidden fixed top-0 left-0 right-0 h-[60px]  text-center px-4 py-2 md:rounded-r flex justify-between items-center z-50">
            <div className="flex gap-1 items-center ">
              <div onClick={() => navigate("/sidebar")}>
                <IoMdArrowBack className="text-gray-700 md:hidden" size={30} />
              </div>
              <div className="flex items-center">
                <img
                  className="w-[30px] h-[30px] "
                  src={selectedConversation?.profilePic}
                  alt="U"
                />
                <span className="text-gray-600 ml-2 text-xl font-bold capitalize">
                  {selectedConversation?.fullName}
                </span>
              </div>
            </div>
            <div>
              <CiMenuKebab
                size={20}
                className="text-slate-800 font-extrabold"
              />
            </div>
          </div>

          <div className="hidden bg-teal-400  opacity-90 text-center px-4 py-2 md:rounded-r mb-2 md:flex justify-between items-center">
            <div className="flex gap-1 items-center ">
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[20px] "
                  src={selectedConversation?.profilePic}
                  alt="U"
                />
                <span className="text-gray-600 ml-2 font-bold capitalize">
                  {selectedConversation?.fullName}
                </span>
              </div>
            </div>
            <div>
              <CiMenuKebab
                size={20}
                className="text-slate-800 font-extrabold"
              />
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex  w-full h-full justify-center items-center">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
