import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import {
  FiFileText,
  FiBarChart,
  FiUsers,
  FiBell,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <FiFileText className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                L I M I T I
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <SignedIn>
              <Link to="/dashboard" icon={FiBarChart}>
                Dashboard
              </Link>
              <Link to="/clients" icon={FiUsers}>
                Clients
              </Link>
              <Link to="/reports" icon={FiFileText}>
                Reports
              </Link>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <FiBell className="w-5 h-5 text-gray-600" />
              </button>
            </SignedIn>

            <div className="relative">
              <SignedIn>
                <UserButton showName />
              </SignedIn>
              <SignedOut>
                <Link to="/sign-in">Sign In</Link>
              </SignedOut>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
