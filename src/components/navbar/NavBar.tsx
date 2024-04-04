import React from "react";
import { Link } from "react-router-dom";

// Define props if needed. For simplicity, we're not passing props here.
interface NavBarProps {
  color: string;
  textColor?: string;
  guideTextColor?: string;
}

const NavBar: React.FC<NavBarProps> = ({
  color = "",
  textColor = "",
  guideTextColor = "",
}) => {
  const resultClass = `bg-gray-800 text-white p-4`;

  return (
    <nav className={resultClass} style={{ backgroundColor: `${color}` }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link
            to="/"
            className="hover:text-gray-300"
            style={{ color: `${guideTextColor}` }}
          >
            City Guide
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/places"
            className="hover:text-gray-300"
            style={{ color: `${textColor}` }}
          >
            Places to Visit
          </Link>
          <Link
            to="/hotels"
            className="hover:text-gray-300"
            style={{ color: `${textColor}` }}
          >
            Hotels
          </Link>
          <Link
            to="/eating-out"
            className="hover:text-gray-300"
            style={{ color: `${textColor}` }}
          >
            Eating Out
          </Link>
          <Link
            to="/night-life"
            className="hover:text-gray-300"
            style={{ color: `${textColor}` }}
          >
            Night Life
          </Link>
          <Link
            to="/transportation"
            className="hover:text-gray-300"
            style={{ color: `${textColor}` }}
          >
            Transportation
          </Link>
        </div>
        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden">
          <button>
            {/* Icon or SVG for hamburger menu */}
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
