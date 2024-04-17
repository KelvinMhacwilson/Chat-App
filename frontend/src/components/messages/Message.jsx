function Message() {
  return (
    <div className="chat chart-end">
      <div className="chat-image avatar">
        <div className="rounded-full w-10">
          <img src="" alt="Tailwind CSS chat bubble component" />
        </div>
      </div>

      <div className={`chat-bubble text-white bg-blue-500`}>Hi! How are u</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
}

export default Message;
