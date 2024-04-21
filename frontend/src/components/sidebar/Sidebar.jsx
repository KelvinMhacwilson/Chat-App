import { IoMdArrowBack } from "react-icons/io";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <div className="hidden md:block">
        <LogoutButton />
      </div>
      <div
        className="md:hidden mt-5 bg-teal-400  w-8 items-center justify-center rounded-full p-1 hover:bg-teal-600"
        onClick={() => {
          localStorage.removeItem("selectedConversation");
          navigate("/home");
        }}
      >
        <IoMdArrowBack className="font-extrabold text-white" size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
