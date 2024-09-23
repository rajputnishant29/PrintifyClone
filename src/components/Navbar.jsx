import React, { useState } from "react";
import logo from "../assets/Printify_Logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="nav-container shadow-sm border-b flex justify-between items-center text-zinc-800 ">
        <div className="flex items-center justify-between w-full lg:w-auto px-4">
          <div className="lg:hidden" onClick={toggleMenu}>
            <FaBars className="text-2xl cursor-pointer" />
          </div>
          {/* Logo */}
          <div className="logo py-4 px-4">
            <img className="h-9 w-100%" src={logo} alt="Logo" />
          </div>
        </div>

        {/* For large Screens*/}
        <div className="hidden lg:flex flex-row justify-center items-center gap-4">
          <div className="hover:text-green-400 cursor-pointer">Catalog</div>

          {/*dropdowns*/}
          <div
            onMouseEnter={() => handleMouseEnter("how-it-works")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hover:text-green-400 cursor-pointer flex items-end group">
              How it works
              <div className="text-xl group-hover:rotate-180 transform transition-all">
                <IoMdArrowDropdown />
              </div>
            </div>
            {activeDropdown === "how-it-works" && (
              <div className="dropdown-menu text-black absolute top-15 shadow-md p-5 flex flex-col justify-center items-start gap-3">
                <div className="hover:text-green-400 cursor-pointer">
                  How Printify Works
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Print On Demand
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Printify Quality Promise
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  What to Sell?
                </div>
              </div>
            )}
          </div>

          <div className="hover:text-green-400 cursor-pointer">Pricing</div>
          <div className="hover:text-green-400 cursor-pointer">Blog</div>

          <div
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hover:text-green-400 cursor-pointer flex items-end group">
              Services
              <div className="text-xl group-hover:rotate-180 transform transition-all">
                <IoMdArrowDropdown />
              </div>
            </div>
            {activeDropdown === "services" && (
              <div className="dropdown-menu text-black absolute top-15 shadow-md p-5 flex flex-col justify-center items-start gap-3">
                <div className="hover:text-green-400 cursor-pointer">
                  Printify Studio
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Printify Express Delivery
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Transfer Products
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Order In Bulk
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Experts Program
                </div>
              </div>
            )}
          </div>

          <div className="hover:text-green-400 cursor-pointer">Use-cases</div>

          <div
            onMouseEnter={() => handleMouseEnter("need-help")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hover:text-green-400 cursor-pointer flex items-end group">
              Need help?
              <div className="text-xl group-hover:rotate-180 transform transition-all">
                <IoMdArrowDropdown />
              </div>
            </div>
            {activeDropdown === "need-help" && (
              <div className="dropdown-menu text-black absolute top-15 shadow-md p-5 flex flex-col justify-center items-start gap-3">
                <div className="hover:text-green-400 cursor-pointer">
                  Help Center
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Contacts
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  My Requests
                </div>
              </div>
            )}
          </div>
        </div>
            {/* Buttons */}
        <div className="lg:flex items-center justify-center gap-3 mx-8">
          <button className="px-4 py-2 border border-zinc-400 rounded-sm text-center font-semibold hover:text-green-500">
            Log in
          </button>
          <button className="px-4 py-2 bg-green-500 rounded-sm text-center font-semibold text-white hover:bg-green-600">
            Sign up
          </button>
        </div>
      </div>

      {/* For small and medium screens */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>

        {/* Sidebar Menu */}
        <div className="p-4 flex flex-col gap-4">
          <div className="hover:text-green-400 cursor-pointer">Catalog</div>

          <div
            onMouseEnter={() => handleMouseEnter("how-it-works")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hover:text-green-400 cursor-pointer flex items-end group">
              How it works
              <div className="text-xl group-hover:rotate-180 transform transition-all">
                <IoMdArrowDropdown />
              </div>
            </div>
            {activeDropdown === "how-it-works" && (
              <div className="dropdown-menu text-black shadow-md p-5 flex flex-col gap-3">
                <div className="hover:text-green-400 cursor-pointer">
                  How Printify Works
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Print On Demand
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Printify Quality Promise
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  What to Sell?
                </div>
              </div>
            )}
          </div>

          <div className="hover:text-green-400 cursor-pointer">Pricing</div>
          <div className="hover:text-green-400 cursor-pointer">Blog</div>
          <div
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hover:text-green-400 cursor-pointer flex items-end group">
              Services
              <div className="text-xl group-hover:rotate-180 transform transition-all">
                <IoMdArrowDropdown />
              </div>
            </div>
            {activeDropdown === "services" && (
              <div className="dropdown-menu text-black shadow-md p-5 flex flex-col gap-3">
                <div className="hover:text-green-400 cursor-pointer">
                 Printify Studio
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Printify Express Delivery
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Transfer Products
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Order In Bulk
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Experts Program
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("use-cases")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hover:text-green-400 cursor-pointer flex items-end group">
              Use-cases
              <div className="text-xl group-hover:rotate-180 transform transition-all">
                <IoMdArrowDropdown />
              </div>
            </div>
            {activeDropdown === "use-cases" && (
              <div className="dropdown-menu text-black shadow-md p-5 flex flex-col gap-3">
                <div className="hover:text-green-400 cursor-pointer">
                  Merch for Fans
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Merch for eCommerce
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Merch for Enterprises
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Grow Your Store
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("need-help")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hover:text-green-400 cursor-pointer flex items-end group">
             Need help?
              <div className="text-xl group-hover:rotate-180 transform transition-all">
                <IoMdArrowDropdown />
              </div>
            </div>
            {activeDropdown === "need-help" && (
              <div className="dropdown-menu text-black shadow-md p-5 flex flex-col gap-3">
                <div className="hover:text-green-400 cursor-pointer">
                  Help Center
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  Contacts
                </div>
                <div className="hover:text-green-400 cursor-pointer">
                  My Requests
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
