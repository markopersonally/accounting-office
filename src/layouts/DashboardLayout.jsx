import * as React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";

export default function DashboardLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded]);

  if (!isLoaded) return "Loading...";

  return isSignedIn ? <Outlet /> : <Navigate to="/sign-in" replace />;
}
