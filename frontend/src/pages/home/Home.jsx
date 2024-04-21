import { TiMediaRewindOutline, TiMessages } from "react-icons/ti";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { IoSearchSharp } from "react-icons/io5";

const Home = () => {
  return (
    <div className="flex h-screen md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <MessageContainer />

      <div className="fixed bottom-0  left-0 right-0 bg-teal-200 opacity-30 h-12 md:hidden flex justify-evenly items-center">
        <div>
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
          <TiMediaRewindOutline
            size={30}
            className="font-extrabold text-slate-950 hover:text-slate-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
