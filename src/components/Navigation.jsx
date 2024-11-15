import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiFileText,
  FiBarChart,
  FiUsers,
  FiBell,
  FiSearch,
  FiMenu,
  FiChevronDown,
  FiX,
} from "react-icons/fi";

const NavLink = ({ href, icon: Icon, children }) => (
  <a
    href={href}
    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
  >
    <Icon className="w-5 h-5 mr-2" />
    {children}
  </a>
);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <FiFileText className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                L I M I T I
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/dashboard" icon={FiBarChart}>
              Dashboard
            </Link>
            <Link href="/clients" icon={FiUsers}>
              Clients
            </Link>
            <Link href="/reports" icon={FiFileText}>
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

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <FiChevronDown
                  className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                    isProfileOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="/logout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Log out
                  </a>
                </div>
              )}
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

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/dashboard" icon={FiBarChart}>
              Dashboard
            </NavLink>
            <NavLink href="/clients" icon={FiUsers}>
              Clients
            </NavLink>
            <NavLink href="/reports" icon={FiFileText}>
              Reports
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
