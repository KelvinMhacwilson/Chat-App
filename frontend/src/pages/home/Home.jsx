import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { setSelectedConversation } = useConversation();
  useEffect(() => {
    if (windowWidth < 767) {
      setSelectedConversation(null);
    }
  }, [setSelectedConversation, windowWidth]);
  return (
    <div className="relative flex h-screen md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <MessageContainer />

      <div className="absolute bottom-0  left-0 right-0 bg-teal-200 opacity-30 h-12 md:hidden flex justify-evenly items-center">
        <div onClick={() => navigate("/sidebar")}>
          <TiMessages
            size={30}
            className="font-extrabold text-slate-950 hover:text-slate-600"
          />
        </div>
        <div>
          <IoSearchSharp
            size={30}
            className="font-extrabold text-slate-950 hover:text-slate-600"
          />
        </div>
        <div>
          <CgProfile
            size={30}
            className="font-extrabold text-slate-950 hover:text-slate-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
