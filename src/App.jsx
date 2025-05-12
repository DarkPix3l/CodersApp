import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/DashBoard.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<ProtectedRoute />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
