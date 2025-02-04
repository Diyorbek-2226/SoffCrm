import React from 'react';

const Button = ({ children, onClick, className, variant = "primary" }) => {
  const baseStyle = "py-2 px-4 rounded font-semibold transition-all duration-300 text-base";

  const variantStyles = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "text-gray-500 hover:bg-gray-500 hover:text-white",
    custom: "bg-[rgba(160,217,17,1)] text-white hover:bg-[rgba(140,197,17,1)]",
  };

  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${className || ""}`;

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
};


export default Button;
