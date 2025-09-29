import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import NavMenu from "./UI/NavMenu"

export default function ProtectedRoute() {
  const user = useSelector((state) => state.user.user);

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, render the protected page
    return (
    <>
      <NavMenu/>
      <Outlet />
    </>
  );
}