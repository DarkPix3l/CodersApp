import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/DashBoard.jsx";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* 
          Before = “Hide the secret room’s furniture if the user isn’t allowed in.”
          Now = “Don’t even unlock the door unless they’re allowed in.” 
        */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
