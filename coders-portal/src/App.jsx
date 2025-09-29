import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute.jsx";
import Profile from "./pages/Profile";
import Challenges from "./pages/Challenges.jsx";
import Workspace from "./pages/Workspace.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/workspace/:slug" element={<Workspace/>} />
        </Route>
      </Routes>
  );
}

export default App;
