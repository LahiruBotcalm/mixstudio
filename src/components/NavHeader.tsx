import React, { useState, useEffect } from "react";
import logo from "../../src/logo.webp";
import CtBtn from "../components/elements/CtBtn";

const NavHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  //const threshold = 1; // Adjusted threshold for better sensitivity

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed left-1/2 custom-container !pt-[32px] !pb-[40px] transition-all duration-300 -translate-x-1/2 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <header className="flex justify-between items-center w-full">
        <img src={logo} alt="MixStudio Logo" className="h-[37px]" />
        <CtBtn text="Contact Us" />
      </header>
    </div>
  );
};

export default NavHeader;
