import React from 'react';

interface CtBtnProps {
  text: string;
}

const CtBtn: React.FC<CtBtnProps> = ({ text }) => {
  return (
    <button className="text-[#FE0143] border-[1px] border-[#FE0143] rounded-[8px] px-[20px] py-[12px] font-latobold text-[14px] sm:text-[16px] leading-[20px] cursor-pointer hover:bg-[#FE0143] hover:text-white transition-all duration-300">
      {text}
    </button>
  );
};

export default CtBtn;