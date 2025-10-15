import React from 'react';

interface CtBtnProps {
  text: string;
}

const CtBtn: React.FC<CtBtnProps> = ({ text }) => {
  return (
    <button className="bg-black text-[#FE0143] border-[1px] border-[#FE0143] rounded-[8px] px-[20px] py-[12px] font-latobold text-[14px] sm:text-[16px] leading-[20px]">
      {text}
    </button>
  );
};

export default CtBtn;