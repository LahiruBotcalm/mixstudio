import React from "react";
import logo from "../../public/logo.webp";
import CtBtn from "../components/elements/CtBtn";

const NavHeader: React.FC = () => {
  return (
    <div className="custom-container !pt-[32px] !pb-[40px]">
      <header className="flex justify-between items-center">
        <img src={logo} alt="MixStudio Logo" className="h-[37px]" />
        <CtBtn text="Contact Us" />
      </header>
    </div>
  );
};

export default NavHeader;
