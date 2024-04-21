import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Sidebar from "./components/sidebar/Sidebar";
import MessageContainer from "./components/messages/MessageContainer";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="md:p-4 h-screen md:flex  items-center  md:justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/sidebar" Component={Sidebar} />
        <Route path="/messagePath" Component={MessageContainer} />
        <Route path="/home" Component={Home} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
