import { BiLogOut } from "react-icons/bi";
import useLogout from "../../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";

const LogoutButton = () => {
  const { authUser } = useAuthContext();
  const { loading, logout } = useLogout();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="mt-auto">
      {loading ? (
        <span className="loading loading-spinner" />
      ) : (
        <div className="flex  justify-between mt-2 py-1 relative">
          <BiLogOut
            className="w-6 h-6 text-white cursor-pointer"
            onClick={logout}
          />
          {isHovered && (
            <p className="chat-bubble text-blue-500  absolute top-[-50px] right-[-50px] cursor-pointer">
              {"@"}
              {authUser.fullName}
            </p>
          )}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-6 h-6 avatar online"
          >
            <img src={authUser.profilePic} alt={authUser.name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
