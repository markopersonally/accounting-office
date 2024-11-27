import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const ProtectedRoute = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return isSignedIn ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default ProtectedRoute;
