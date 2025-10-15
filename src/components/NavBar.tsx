import React, { useState } from "react";
import "../App.css";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("home");

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "events", label: "Events" },
    { id: "sounds", label: "Sounds" },
    { id: "inquiry", label: "Inquiry" },
  ];

  return (
    <div className="custom-container flex justify-center">
      <nav className="sm:w-[453px] w-[335px] bg-[#29292933] text-white flex justify-center p-[8px] pl-15 sm:pl-[8px] fixed bottom-[24px] rounded-[16px] z-50 overflow-x-auto scrollbar-hide">
        <ul className="flex flex-row gap-[0px] sm:gap-[12px] text-[14px] font-latobold leading-[20px]">
          {navItems.map((item) => (
            <li key={item.id} className="flex-shrink-0">
              <button
                onClick={() => handleScroll(item.id)}
                className={`px-[16px] py-[8px] sm:py-[12px] rounded-[8px] transition-all cursor-pointer ${
                  active === item.id
                    ? "bg-[#FFFFFF0F] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
