import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../../hooks/useSendMessage";

function MessageInput() {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message === "") return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <>
      <form
        className="md:px-4 fixed  bottom-0 right-0 left-0 z-40 md:hidden"
        onSubmit={handleSubmit}
      >
        <div className="w-full relative">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className="border p-4  text-sm rounded-t md:rounded-lg block w-full  bg-gray-700 border-gray-600 text-white"
            placeholder="Send a message"
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 right-2 flex items-center pe-3"
          >
            {loading ? <div className="loading loading-spinner" /> : <BsSend />}
          </button>
        </div>
      </form>

      <form className="md:px-4 my-3 hidden md:block" onSubmit={handleSubmit}>
        <div className="w-full relative">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className="border text-sm rounded-t md:rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
            placeholder="Send a message"
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            {loading ? <div className="loading loading-spinner" /> : <BsSend />}
          </button>
        </div>
      </form>
    </>
  );
}

export default MessageInput;
