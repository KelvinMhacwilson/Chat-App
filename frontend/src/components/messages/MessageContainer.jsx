import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMediaRecordOutline, TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { IoMedkitSharp } from "react-icons/io5";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[400px] lg:min-w-[600px] xl:min-w-[900px] 2xl:min-w-[1000px]  w-full mb-9 md:mb-0  flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-teal-400 opacity-30 text-center px-4 py-2 md:rounded-r mb-2 flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <TiMediaRecordOutline size={20} />
              <div className="flex gap-[2px] items-center">
                <img
                  className="w-[20px] h-[20px] "
                  src={selectedConversation?.profilePic}
                  alt="U"
                />
                <span className="text-gray-600 font-bold capitalize">
                  {selectedConversation?.fullName}
                </span>
              </div>
            </div>
            <div>
              <IoMedkitSharp
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

const NoChatSelected = () => {
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
