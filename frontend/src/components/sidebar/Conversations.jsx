import useGetConversations from "../../../hooks/useGetConversations";
import getRandomEmoji from "../../utils/emoji";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations, loading } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          emoji={getRandomEmoji()}
          conversation={conversation}
          lastIndex={index === conversation.length - 1}
        />
      ))}
      {loading && <span className="loading loading-spinner mx-auto" />}
    </div>
  );
};

export default Conversations;
