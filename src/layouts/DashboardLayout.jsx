import * as React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading...";

  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
