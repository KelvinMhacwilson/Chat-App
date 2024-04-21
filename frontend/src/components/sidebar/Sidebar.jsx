import { IoMdArrowBack } from "react-icons/io";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";

const Sidebar = () => {
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
  const { setSelectedConversation } = useConversation();
  useEffect(() => {
    if (windowWidth > 767) {
      navigate("/home");
    }
  }, [setSelectedConversation, windowWidth, navigate]);
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <div className="hidden md:block">
        <LogoutButton />
      </div>
      <div
        className="md:hidden mt-5 bg-teal-400  w-12 items-center justify-center rounded-full p-1 hover:bg-teal-600"
        onClick={() => {
          localStorage.removeItem("selectedConversation");
          navigate("/home");
        }}
      >
        <IoMdArrowBack className="font-extrabold text-white" size={35} />
      </div>
    </div>
  );
};

export default Sidebar;
