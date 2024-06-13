import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <>
      <button
        className={`p-[8px] rounded-lg min-w-[136px] font-semibold font-primary bg-quaternary hover:bg-tertiary text-tertiary hover:text-quaternary border-2 border-quaternary transition-all duration-300`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export const ButtonSecondary = ({ children, onClick }) => {
  return (
    <>
      <button
        className={`p-[8px] rounded-lg min-w-[136px] font-semibold font-primary bg-tertiary hover:bg-quaternary text-quaternary hover:text-tertiary border-2 border-quaternary transition-all duration-300`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
