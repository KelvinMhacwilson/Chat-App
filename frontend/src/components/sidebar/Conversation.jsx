import UseSocket from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
import { useNavigate } from "react-router-dom";
const Conversation = ({ conversation, lastIndex, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = UseSocket();
  const isOnline = onlineUsers.includes(conversation._id);
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          setSelectedConversation(conversation);
        }}
        className={`hidden md:flex gap-2 items-center hover:bg-teal-500 hover:opacity-70 rounded p-2 py-1 cursor-pointer ${isSelected &&
          "bg-teal-500 opacity-80"}`}
      >
        <div className={`avatar ${isOnline && "online"}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="Me" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setSelectedConversation(conversation);
          navigate("/messagePath");
        }}
        className={`md:hidden flex gap-2 items-center hover:bg-teal-500 hover:opacity-70 rounded p-2 py-1 cursor-pointer ${isSelected &&
          "bg-teal-500 opacity-80"}`}
      >
        <div className={`avatar ${isOnline && "online"}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="Me" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
