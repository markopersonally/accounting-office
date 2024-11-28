import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import RootLayout from "./layouts/RootLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SignInPage from "./components/SignInPage.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
import ExpenseTracker from "./components/ExpenseTracker.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/expensetracker", element: <ExpenseTracker /> },
          { path: "/dashboard", element: <Dashboard /> },
        ],
      },
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
