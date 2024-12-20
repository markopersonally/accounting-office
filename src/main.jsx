import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import RootLayout from "./layouts/RootLayout.jsx";
// import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ExpenseTracker from "./components/ExpenseTracker.jsx";
import Reports from "./components/Reports.jsx";
import Clients from "./components/Clients.jsx";
import SignInPage from "./components/SignInPage.jsx";
import SignUpPage from "./components/SignUpPage.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/expensetracker", element: <ExpenseTracker /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/reports", element: <Reports /> },
      { path: "/clients", element: <Clients /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </StrictMode>
);
